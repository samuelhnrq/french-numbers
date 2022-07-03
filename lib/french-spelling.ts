import { getDigit, numberSubString } from "./utils";

const units = [
  "",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
];

const decimals = [
  "--FILLER--",
  "dix",
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante",
];

const hundreds = ["cent", "mille"];

const frenchStuff = ["soixante", "quatre-vingt", "quatre-vingt"];

const edgeCutter = /^(?:un)?-|-$/;

function simpleDecimal(n: number): string {
  if (n < units.length) return units[n];
  if (n >= 70) return laFrance(n);
  const unitNumber = getDigit(n, 1);
  const tensNumber = getDigit(n, 2);
  const unit = units[unitNumber];
  const tens = decimals[tensNumber];
  const divider = unitNumber === 1 ? "-et-" : "-";
  return (tens + divider + unit).replace(edgeCutter, "");
}

function laFrance(n: number): string {
  const unitNumber = getDigit(n, 1);
  const tensNumber = getDigit(n, 2);
  const tens = frenchStuff[tensNumber - 7];
  let unit: string;
  if (tensNumber === 7 || tensNumber === 9) {
    unit = simpleDecimal(unitNumber + 10);
  } else {
    unit = units[unitNumber];
  }
  if (n === 71) {
    return `${tens}-et-${unit}`;
  }
  return `${tens}-${unit}`.replace(edgeCutter, "");
}

function splitInHundreths(n: number): number[] {
  const nOfDigits = n === 1 ? 1 : Math.ceil(Math.log10(n));
  const nOfHundreths = Math.ceil(nOfDigits / 3);
  const parts: number[] = [];
  for (let x = 0; x < nOfHundreths; x++) {
    const startingI = x * 3;
    parts.push(numberSubString(n, startingI, startingI + 3));
  }
  return parts;
}

export function toFrenchSpelling(x: number): string {
  const hundredths = splitInHundreths(x);
  let number = "";
  for (let i = 0; i < hundredths.length; i++) {
    const n = hundredths[i];
    // FIXME: all this case is only 0 < n < 100
    const frenchPart = simpleDecimal(n);
    if (n > 100) {
      const hundredth = getDigit(n, 3);
      const dozensPart = simpleDecimal(n - 100);
      const final = `${units[hundredth]}-${hundreds[i]}-${dozensPart}`;
      number += final.replace(edgeCutter, "");
    } else {
      number += frenchPart;
    }
  }
  return number;
}
