
export function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

export function calculateLine({
  weightPerFoot,
  lengthPerPiece,
  quantity,
  millPrice,
  markupRate
}) {
  const weight = Number(weightPerFoot) || 0;
  const length = Number(lengthPerPiece) || 0;
  const qty = Number(quantity) || 0;
  const mill = Number(millPrice) || 0;
  const markup = Number(markupRate) || 0;

  const pieceWeight = weight * length;
  const totalWeight = pieceWeight * qty;
  const baseCostPerPiece = (pieceWeight / 100) * mill;
  const customerPricePerPiece = baseCostPerPiece * (1 + markup / 100);
  const lineTotal = customerPricePerPiece * qty;

  return {
    pieceWeight,
    totalWeight,
    baseCostPerPiece,
    customerPricePerPiece,
    lineTotal: roundMoney(lineTotal)
  };
}

export function calculateQuote(lines, markupRate, deliveryRate, deliveryOverride = "") {
  const lineResults = lines.map(line => ({
    ...line,
    ...calculateLine({
      weightPerFoot: line.weightPerFoot,
      lengthPerPiece: line.lengthPerPiece,
      quantity: line.quantity,
      millPrice: line.millPrice,
      markupRate
    })
  }));

  const totalWeight = lineResults.reduce(
    (sum, line) => sum + line.totalWeight,
    0
  );

  const materialSubtotal = roundMoney(
    lineResults.reduce((sum, line) => sum + line.lineTotal, 0)
  );

  const hasOverride =
    deliveryOverride !== "" &&
    deliveryOverride !== null &&
    deliveryOverride !== undefined &&
    Number.isFinite(Number(deliveryOverride)) &&
    Number(deliveryOverride) >= 0;

  const deliveryTotal = roundMoney(
    hasOverride
      ? Number(deliveryOverride)
      : totalWeight * (Number(deliveryRate) || 0)
  );

  return {
    lines: lineResults,
    totalWeight,
    materialSubtotal,
    deliveryTotal,
    grandTotal: roundMoney(materialSubtotal + deliveryTotal)
  };
}
