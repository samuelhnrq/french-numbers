import { getDigit, numberSubString, numLen } from "./utils";

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

const hundreds = ["", "mille"];

const frenchStuff = ["soixante", "quatre-vingt", "quatre-vingt"];

function edgeCutter(numb: string): string {
  const regex = /^un-(\w)|-+$|(-)-+/g;
  return numb.trim().replace(regex, "$1$2");
}

function simpleDecimal(n: number) {
  const unitNumber = getDigit(n, 1);
  const tensNumber = getDigit(n, 2);
  const unit = units[unitNumber];
  const tens = decimals[tensNumber];
  const divider = unitNumber === 1 ? "-et-" : "-";
  return tens + divider + unit;
}

function simpleHundreth(n: number): string {
  const decimal = Math.floor(n / 100);
  if (decimal > 0) {
    n -= 100 * decimal;
  }
  let tens: string;
  if (n < units.length) {
    tens = units[n];
  } else if (n >= 70) {
    tens = laFrance(n);
  } else {
    tens = simpleDecimal(n);
  }
  if (decimal === 0) {
    return tens;
  }
  if (decimal === 1) {
    return `cent-${tens}`;
  }
  return `${units[decimal]}-cent-${tens}`;
}

function laFrance(n: number): string {
  const unitNumber = getDigit(n, 1);
  const tensNumber = getDigit(n, 2);
  const tens = frenchStuff[tensNumber - 7];
  let unit: string;
  if (tensNumber === 7 || tensNumber === 9) {
    unit = simpleHundreth(unitNumber + 10);
  } else {
    unit = units[unitNumber];
  }
  if (n === 71) {
    return `${tens}-et-${unit}`;
  }
  return `${tens}-${unit}`;
}

function splitInHundreths(n: number): number[] {
  const nOfDigits = numLen(n);
  const nOfHundreths = Math.ceil(nOfDigits / 3);
  const parts: number[] = [];
  for (let x = 0; x < nOfHundreths; x++) {
    const endI = nOfDigits - x * 3;
    const startI = Math.max(0, endI - 3);
    const nextNumber = numberSubString(n, startI, endI);
    parts.push(nextNumber);
  }
  return parts;
}

export function toFrenchSpelling(x: number): string {
  const hundredths = splitInHundreths(x);
  let number = "";
  for (let i = hundredths.length - 1; i >= 0; i--) {
    const n = hundredths[i];
    console.log("out of", x, "converting", n, "the", i, "part");
    const frenchPart = simpleHundreth(n);
    console.log("result is", frenchPart);
    number += `${frenchPart}-${hundreds[i]}-`;
  }
  console.log("will trim", number);
  const trimmed = edgeCutter(number);
  console.log("now its", trimmed);
  const final = trimmed.replace(/(-cent|-mille)$/, "$1s");
  return final;
}
