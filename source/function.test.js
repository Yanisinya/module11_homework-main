import { createAdder } from "./function.js";

describe("must add two numbers", () => {
    it("3 + 5 = 8", () => { expect(createAdder(3)(5)).toBe(8); });
    it("3 + '5' = '35'", () => { expect(createAdder(3)("5")).toBe("35"); });
    it("NaN + 5 = NaN", () => { expect(createAdder(NaN)(5)).toBe(NaN); });
    it("3 + true = 4", () => { expect(createAdder(3)(true)).toBe(4); });
    it("5 + (-5) = 0", () => { expect(createAdder(5)(-5)).toBe(0); });
    it("3 + 0 = 3", () => { expect(createAdder(3)(0)).toBe(3); });
});