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

  it("should convert hundreds", () => {
    const oneH = toFrenchSpelling(100);
    const twoH = toFrenchSpelling(200);
    const hFourteen = toFrenchSpelling(114);
    const hFour = toFrenchSpelling(104);
    const hEightyEight = toFrenchSpelling(188);
    const hNinetyNine = toFrenchSpelling(199);
    const hSeventyNine = toFrenchSpelling(179);

    expect(oneH).toBe("cent");
    expect(twoH).toBe("deux-cents");
    expect(hFourteen).toBe("cent-quatorze");
    expect(hFour).toBe("cent-quatre");
    expect(hEightyEight).toBe("cent-quatre-vingt-huit");
    expect(hNinetyNine).toBe("cent-quatre-vingt-dix-neuf");
    expect(hSeventyNine).toBe("cent-soixante-dix-neuf");
  });

  it("should convert thousands", () => {
    const oneT = toFrenchSpelling(1000);
    const twoT = toFrenchSpelling(2000);
    const oneTFourteen = toFrenchSpelling(1014);
    const tEightyEight = toFrenchSpelling(1088);
    const tNinetyNine = toFrenchSpelling(1099);

    expect(oneT).toBe("mille");
    expect(twoT).toBe("deux-milles");
    expect(oneTFourteen).toBe("mille-quatorze");
    expect(tEightyEight).toBe("mille-quatre-vingt-huit");
    expect(tNinetyNine).toBe("mille-quatre-vingt-dix-neuf");
  });

  it("should convert multiple thousands", () => {
    const oneTOneHOne = toFrenchSpelling(1111);
    const twoT = toFrenchSpelling(2845);
    const oneTFourteen = toFrenchSpelling(20845);

    expect(oneTOneHOne).toBe("mille-cent-onze");
    expect(twoT).toBe("deux-mille-huit-cent-quarante-cinq");
    expect(oneTFourteen).toBe("vingt-mille-huit-cent-quarante-cinq");
  });
});
