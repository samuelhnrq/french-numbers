import { toFrenchSpelling } from "./french-spelling";

describe("French numbers conversion", () => {
  it("should convert base cases", () => {
    const six = toFrenchSpelling(6);
    const un = toFrenchSpelling(1);
    const fourteen = toFrenchSpelling(14);

    expect(six).toBe("six");
    expect(un).toBe("un");
    expect(fourteen).toBe("quatorze");
  });
  it("should convert simple decimal pattern", () => {
    const fourtyTwo = toFrenchSpelling(42);
    const thirtyThree = toFrenchSpelling(33);

    expect(fourtyTwo).toBe("quarante-deux");
    expect(thirtyThree).toBe("trente-trois");
  });
  it("should convert decimal ending with one", () => {
    const fiftyOne = toFrenchSpelling(51);
    const twentyOne = toFrenchSpelling(21);

    expect(fiftyOne).toBe("cinquante-et-un");
    expect(twentyOne).toBe("vingt-et-un");
  });
  it("should convert seventies", () => {
    const seventy = toFrenchSpelling(70);
    const seventyFour = toFrenchSpelling(74);
    const eightyEight = toFrenchSpelling(88);
    const ninetyNine = toFrenchSpelling(99);
    const seventyNine = toFrenchSpelling(79);

    expect(seventy).toBe("soixante-dix");
    expect(seventyFour).toBe("soixante-quatorze");
    expect(eightyEight).toBe("quatre-vingt-huit");
    expect(ninetyNine).toBe("quatre-vingt-dix-neuf");
    expect(seventyNine).toBe("soixante-dix-neuf");
  });
});
