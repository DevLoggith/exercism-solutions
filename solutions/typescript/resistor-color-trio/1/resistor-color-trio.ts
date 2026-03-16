const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export function decodedResistorValue(bandColors: string[]) {
  const baseResistance: number = (COLORS.indexOf(bandColors[0]) * 10) + COLORS.indexOf(bandColors[1]);
  const exponent: number = 10**COLORS.indexOf(bandColors[2]);
  
  const ohmsValue: number = baseResistance * exponent;

  if (ohmsValue >= 1000000000) {
    return `${ohmsValue / 1000000000} gigaohms`;
    
  } else if (ohmsValue >= 1000000) {
    return `${ohmsValue / 1000000} megaohms`;
    
  } else if (ohmsValue >= 1000) {
    return `${ohmsValue / 1000} kiloohms`;
    
  } else {
    return `${ohmsValue} ohms`;
  }
}

