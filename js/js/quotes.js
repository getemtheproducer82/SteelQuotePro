
import { calculateQuote, roundMoney } from "./calculator.js";

const $ = id => document.getElementById(id);

export function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(Number(value) || 0);
}

export function formatNumber(value, decimals = 2) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals
  }).format(Number(value) || 0);
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

export function readQuoteHeader() {
  return {
    customerName: $("customerName").value.trim(),
    contactName: $("contactName").value.trim(),
    customerEmail: $("customerEmail").value.trim(),
    quoteDate: $("quoteDate").value,
    deliveryAddress: $("deliveryAddress").value.trim(),
    quoteNotes: $("quoteNotes").value.trim()
  };
}

export function renderQuoteLines(lines, markupRate) {
  const container = $("quoteLines");
  $("lineCountBadge").textContent =
    `${lines.length} ${lines.length === 1 ? "line" : "lines"}`;

  if (!lines.length) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">＋</div>
        <h3>No materials added yet</h3>
        <p>Select a profile, enter pricing and quantity, then add it to this quote.</p>
      </div>`;
    return;
  }

  const results = calculateQuote(lines, markupRate, 0, 0);

  container.innerHTML = results.lines.map((line, index) => `
    <article class="quote-line">
      <div class="line-header">
        <div>
          <h3>${escapeHTML(line.description || line.profile || line.typeLabel || "Steel material")}</h3>
          <p>
            ${escapeHTML(line.profile || "Custom profile")}
            ${line.lineReference ? ` · Ref: ${escapeHTML(line.lineReference)}` : ""}
          </p>
        </div>
        <div class="line-total">${formatCurrency(line.lineTotal)}</div>
      </div>

      <div class="line-details">
        <div>
          <span>Quantity</span>
          <strong>${formatNumber(line.quantity, 0)} pcs</strong>
        </div>
        <div>
          <span>Length / Piece</span>
          <strong>${formatNumber(line.lengthPerPiece, 3)} ft</strong>
        </div>
        <div>
          <span>Weight / Piece</span>
          <strong>${formatNumber(line.pieceWeight, 2)} lb</strong>
        </div>
        <div>
          <span>Total Weight</span>
          <strong>${formatNumber(line.totalWeight, 2)} lb</strong>
        </div>
      </div>

      <div class="line-actions">
        <button class="btn btn-secondary" data-action="edit" data-index="${index}">
          Edit
        </button>
        <button class="btn btn-danger" data-action="remove" data-index="${index}">
          Remove
        </button>
      </div>
    </article>
  `).join("");
}

export function buildCustomerQuoteText(quote) {
  const totals = calculateQuote(
    quote.lines || [],
    Number(quote.markupRate) || 0,
    Number(quote.deliveryRate) || 0,
    quote.deliveryOverride ?? ""
  );

  const header = quote.header || {};
  const lines = totals.lines;

  const output = [
    "STEEL QUOTE",
    "========================================",
    `Quote Number: ${quote.quoteNumber || "New Quote"}`,
    `Quote Date: ${header.quoteDate || new Date().toISOString().slice(0, 10)}`,
    "",
    `Customer: ${header.customerName || "Not specified"}`,
    `Contact: ${header.contactName || "Not specified"}`,
    `Email: ${header.customerEmail || "Not specified"}`,
    `Delivery Address / Job: ${header.deliveryAddress || "Not specified"}`,
    "",
    "MATERIALS",
    "----------------------------------------"
  ];

  lines.forEach((line, index) => {
    output.push(
      `${index + 1}. ${line.description || line.profile || line.typeLabel || "Steel material"}`,
      `   Profile: ${line.profile || "Custom profile"}`,
      `   Quantity: ${line.quantity} piece(s)`,
      `   Length per piece: ${formatNumber(line.lengthPerPiece, 3)} ft`,
      `   Weight per piece: ${formatNumber(line.pieceWeight, 2)} lb`,
      `   Total line weight: ${formatNumber(line.totalWeight, 2)} lb`,
      `   Line total: ${formatCurrency(line.lineTotal)}`,
      ""
    );
  });

  output.push(
    "----------------------------------------",
    `Total Order Weight: ${formatNumber(totals.totalWeight, 2)} lb`,
    `Material Subtotal: ${formatCurrency(totals.materialSubtotal)}`,
    `Delivery: ${formatCurrency(totals.deliveryTotal)}`,
    `CUSTOMER TOTAL: ${formatCurrency(totals.grandTotal)}`,
    ""
  );

  if (header.quoteNotes) {
    output.push("NOTES", header.quoteNotes, "");
  }

  output.push(
    "Thank you for the opportunity to quote your steel material requirements.",
    "Please confirm material availability, specifications, and delivery terms before order acceptance."
  );

  return output.join("\n");
}

export function prepareCustomerPrint() {
  const existingTitle = document.title;
  document.title = `Steel Quote - ${$("quoteNumber").textContent}`;
  document.body.classList.add("print-customer");

  const cleanup = () => {
    document.body.classList.remove("print-customer");
    document.title = existingTitle;
    window.removeEventListener("afterprint", cleanup);
  };

  window.addEventListener("afterprint", cleanup);
  window.print();

  // Fallback for browsers that do not emit afterprint promptly.
  setTimeout(() => {
    document.body.classList.remove("print-customer");
    document.title = existingTitle;
  }, 1500);
}

export function exportQuoteData(quote) {
  const totals = calculateQuote(
    quote.lines || [],
    Number(quote.markupRate) || 0,
    Number(quote.deliveryRate) || 0,
    quote.deliveryOverride ?? ""
  );

  return {
    ...quote,
    totals: {
      totalWeight: totals.totalWeight,
      materialSubtotal: roundMoney(totals.materialSubtotal),
      deliveryTotal: totals.deliveryTotal,
      grandTotal: totals.grandTotal
    }
  };
}
