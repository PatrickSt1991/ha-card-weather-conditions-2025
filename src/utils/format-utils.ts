import {numberFormat_0dec, numberFormat_1dec} from "./ha-card-weather-conditions";

export function pad(n: number | string, width: number, z?: string): string {
  z = z || "0";
  n = n + "";
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

export function translate(term: string, terms): string {
  const key = Object.keys(terms).find(
    (k) => k.toLowerCase() === term.toLowerCase()
  );
  return key ? terms[key] : term;
}

export function numFormat(stringNumber: string, fractionDigits = 1): string {
  switch (fractionDigits) {
    case 0:
      return numberFormat_0dec.format(parseFloat(stringNumber));
    case 1:
      return numberFormat_1dec.format(parseFloat(stringNumber));
    default:
      return parseFloat(stringNumber).toFixed(fractionDigits);
  }
}
