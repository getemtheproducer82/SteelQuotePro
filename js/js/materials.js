
export const MATERIALS = {
  "ibeam": {
    label: "I-Beam / Wide Flange",
    profiles: [
      { name: "W4x13", weight: 13.0 },
      { name: "W6x9", weight: 9.0 },
      { name: "W6x12", weight: 12.0 },
      { name: "W8x10", weight: 10.0 },
      { name: "W8x13", weight: 13.0 },
      { name: "W8x18", weight: 18.0 },
      { name: "W10x12", weight: 12.0 },
      { name: "W10x22", weight: 22.0 },
      { name: "W12x14", weight: 14.0 },
      { name: "W12x26", weight: 26.0 },
      { name: "W12x35", weight: 35.0 },
      { name: "W14x22", weight: 22.0 },
      { name: "W14x30", weight: 30.0 },
      { name: "W16x31", weight: 31.0 },
      { name: "W18x35", weight: 35.0 },
      { name: "W21x44", weight: 44.0 },
      { name: "W24x55", weight: 55.0 }
    ]
  },

  "square-tube": {
    label: "Square Tube",
    profiles: [
      { name: '1" x 1" x 0.065"', weight: 0.95 },
      { name: '1" x 1" x 0.083"', weight: 1.19 },
      { name: '1.5" x 1.5" x 0.083"', weight: 1.83 },
      { name: '2" x 2" x 0.083"', weight: 2.48 },
      { name: '2" x 2" x 0.120"', weight: 3.55 },
      { name: '2" x 2" x 0.188"', weight: 5.25 },
      { name: '3" x 3" x 0.120"', weight: 5.42 },
      { name: '3" x 3" x 0.188"', weight: 8.10 },
      { name: '4" x 4" x 0.120"', weight: 7.30 },
      { name: '4" x 4" x 0.188"', weight: 10.90 },
      { name: '4" x 4" x 0.250"', weight: 14.20 },
      { name: '6" x 6" x 0.250"', weight: 21.90 }
    ]
  },

  "rect-tube": {
    label: "Rectangular Tube",
    profiles: [
      { name: '2" x 1" x 0.083"', weight: 1.83 },
      { name: '2" x 1" x 0.120"', weight: 2.45 },
      { name: '3" x 2" x 0.120"', weight: 4.30 },
      { name: '3" x 2" x 0.188"', weight: 6.30 },
      { name: '4" x 2" x 0.120"', weight: 5.10 },
      { name: '4" x 2" x 0.188"', weight: 7.55 },
      { name: '4" x 3" x 0.188"', weight: 9.00 },
      { name: '6" x 2" x 0.188"', weight: 10.10 },
      { name: '6" x 4" x 0.188"', weight: 12.00 },
      { name: '6" x 4" x 0.250"', weight: 15.80 }
    ]
  },

  "pipe": {
    label: "Steel Pipe",
    profiles: [
      { name: '1/2" Schedule 40', weight: 0.85 },
      { name: '3/4" Schedule 40', weight: 1.13 },
      { name: '1" Schedule 40', weight: 1.68 },
      { name: '1-1/4" Schedule 40', weight: 2.27 },
      { name: '1-1/2" Schedule 40', weight: 2.72 },
      { name: '2" Schedule 40', weight: 3.65 },
      { name: '2-1/2" Schedule 40', weight: 5.79 },
      { name: '3" Schedule 40', weight: 7.58 },
      { name: '4" Schedule 40', weight: 10.79 },
      { name: '6" Schedule 40', weight: 18.97 }
    ]
  },

  "channel": {
    label: "Steel Channel",
    profiles: [
      { name: "C3x4.1", weight: 4.1 },
      { name: "C4x5.4", weight: 5.4 },
      { name: "C5x6.7", weight: 6.7 },
      { name: "C6x8.2", weight: 8.2 },
      { name: "C6x10.5", weight: 10.5 },
      { name: "C8x11.5", weight: 11.5 },
      { name: "C8x13.75", weight: 13.75 },
      { name: "C10x15.3", weight: 15.3 },
      { name: "C10x20", weight: 20.0 },
      { name: "C12x20.7", weight: 20.7 }
    ]
  },

  "angle": {
    label: "Angle Iron",
    profiles: [
      { name: '1" x 1" x 1/8"', weight: 0.80 },
      { name: '1" x 1" x 3/16"', weight: 1.16 },
      { name: '1-1/2" x 1-1/2" x 1/8"', weight: 1.24 },
      { name: '1-1/2" x 1-1/2" x 1/4"', weight: 2.43 },
      { name: '2" x 2" x 1/8"', weight: 1.66 },
      { name: '2" x 2" x 1/4"', weight: 3.19 },
      { name: '3" x 3" x 1/4"', weight: 4.90 },
      { name: '4" x 4" x 1/4"', weight: 6.60 }
    ]
  },

  "round-bar": {
    label: "Round Bar",
    profiles: [
      { name: '1/4" Round Bar', weight: 0.167 },
      { name: '3/8" Round Bar', weight: 0.376 },
      { name: '1/2" Round Bar', weight: 0.668 },
      { name: '5/8" Round Bar', weight: 1.043 },
      { name: '3/4" Round Bar', weight: 1.502 },
      { name: '1" Round Bar', weight: 2.670 },
      { name: '1-1/4" Round Bar', weight: 4.172 },
      { name: '1-1/2" Round Bar', weight: 6.005 },
      { name: '2" Round Bar', weight: 10.680 }
    ]
  },

  "flat-bar": {
    label: "Flat Bar",
    profiles: [
      { name: '1" x 1/8" Flat Bar', weight: 0.425 },
      { name: '1" x 1/4" Flat Bar', weight: 0.850 },
      { name: '1-1/2" x 1/4" Flat Bar', weight: 1.275 },
      { name: '2" x 1/4" Flat Bar', weight: 1.700 },
      { name: '2" x 3/8" Flat Bar', weight: 2.550 },
      { name: '2" x 1/2" Flat Bar', weight: 3.400 },
      { name: '3" x 1/4" Flat Bar', weight: 2.550 },
      { name: '3" x 1/2" Flat Bar', weight: 5.100 },
      { name: '4" x 1/2" Flat Bar', weight: 6.800 }
    ]
  },

  "round-tube": {
    label: "Round Tubing",
    profiles: [
      { name: '1" OD x 0.065" wall', weight: 0.65 },
      { name: '1" OD x 0.120" wall', weight: 1.11 },
      { name: '1-1/2" OD x 0.065" wall', weight: 0.99 },
      { name: '1-1/2" OD x 0.120" wall', weight: 1.72 },
      { name: '2" OD x 0.065" wall', weight: 1.33 },
      { name: '2" OD x 0.120" wall', weight: 2.33 },
      { name: '2-1/2" OD x 0.120" wall', weight: 2.94 },
      { name: '3" OD x 0.120" wall', weight: 3.55 }
    ]
  },

  "sheet": {
    label: "Sheet Metal",
    profiles: [
      { name: "24 gauge sheet", weight: 1.00 },
      { name: "22 gauge sheet", weight: 1.25 },
      { name: "20 gauge sheet", weight: 1.50 },
      { name: "18 gauge sheet", weight: 2.00 },
      { name: "16 gauge sheet", weight: 2.50 },
      { name: "14 gauge sheet", weight: 3.125 },
      { name: "12 gauge sheet", weight: 3.75 }
    ]
  },

  "plate": {
    label: "Steel Plate",
    profiles: [
      { name: '1/8" Plate', weight: 5.10 },
      { name: '3/16" Plate', weight: 7.65 },
      { name: '1/4" Plate', weight: 10.20 },
      { name: '3/8" Plate', weight: 15.30 },
      { name: '1/2" Plate', weight: 20.40 },
      { name: '5/8" Plate', weight: 25.50 },
      { name: '3/4" Plate', weight: 30.60 },
      { name: '1" Plate', weight: 40.80 }
    ]
  },

  "square-bar": {
    label: "Square Bar",
    profiles: [
      { name: '1/4" Square Bar', weight: 0.425 },
      { name: '3/8" Square Bar', weight: 0.956 },
      { name: '1/2" Square Bar', weight: 1.700 },
      { name: '5/8" Square Bar', weight: 2.656 },
      { name: '3/4" Square Bar', weight: 3.825 },
      { name: '1" Square Bar', weight: 6.800 },
      { name: '1-1/4" Square Bar', weight: 10.625 },
      { name: '1-1/2" Square Bar', weight: 15.300 }
    ]
  },

  "rebar": {
    label: "Rebar",
    profiles: [
      { name: "#3 Rebar (3/8\")", weight: 0.376 },
      { name: "#4 Rebar (1/2\")", weight: 0.668 },
      { name: "#5 Rebar (5/8\")", weight: 1.043 },
      { name: "#6 Rebar (3/4\")", weight: 1.502 },
      { name: "#7 Rebar (7/8\")", weight: 2.044 },
      { name: "#8 Rebar (1\")", weight: 2.670 },
      { name: "#9 Rebar (1-1/8\")", weight: 3.400 },
      { name: "#10 Rebar (1-1/4\")", weight: 4.303 }
    ]
  },

  "custom": {
    label: "Custom Profile",
    profiles: []
  }
};

export function getMaterialTypes() {
  return Object.entries(MATERIALS).map(([value, data]) => ({
    value,
    label: data.label
  }));
}

export function getProfiles(type) {
  return MATERIALS[type]?.profiles ?? [];
}

export function findProfile(type, profileName) {
  return getProfiles(type).find(profile => profile.name === profileName) ?? null;
}

export function estimateWeightPerFoot(type, profileName) {
  const profile = findProfile(type, profileName);
  return profile ? profile.weight : null;
}
