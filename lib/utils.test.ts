import { numberSubString } from "./utils";

describe("numbers substring", () => {
  it("should split number", () => {
    expect(numberSubString(123456, 0, 3)).toBe(123);
    expect(numberSubString(123456, 3, 6)).toBe(456);
    expect(numberSubString(123456, 1, 5)).toBe(2345);
    expect(numberSubString(8007900, 1, 5)).toBe(79);
    expect(numberSubString(1234567890, 0, 2)).toBe(12);
  });
  it("should validate invalid input", () => {
    expect(() => numberSubString(123456, -3, 3)).toThrowError();
    expect(numberSubString(123, 0, 10)).toBe(123);
  });
});
