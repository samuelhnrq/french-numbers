export function getDigit(number: number, n: number): number {
  return Math.floor((number / Math.pow(10, n - 1)) % 10);
}

export function numLen(n: number): number {
  return Math.floor(Math.log10(n) + 1);
}

export function numberSubString(n: number, start: number, end: number): number {
  const nDigits = numLen(n);
  if (start < 0) {
    throw new Error("invalid range");
  }
  if (end > nDigits) {
    end = nDigits;
  }
  const leftDivisor = Math.pow(10, nDigits - start);
  const leftCutOff = n % leftDivisor;
  const rightDivisor = Math.pow(10, nDigits - end);
  const rightCutOff = leftCutOff / rightDivisor;
  return Math.floor(rightCutOff);
}
