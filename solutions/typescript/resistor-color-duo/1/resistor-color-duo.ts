export function decodedValue(bandColors: string[]) {
  let result = "";
  for (let i = 0; i < 2; i++) {
    result += COLORS.indexOf(bandColors[i]).toString();
    console.log(result)
  }
  const intResult = +result;
  return intResult;
}

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
