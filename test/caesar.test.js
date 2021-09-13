const { expect } = require("chai");
const caesar = require("../src/caesar.js").caesar;

describe("caesar", () => {
    it("should return encrypt message with given input and shift", () => {
        const expected = "cheud pdjdclqh";
        const actual = caesar("Zebra Magazine", 3);
        expect(actual).to.eql(expected);
    });
    it("should return false if shift value is 0, greater than 25 or less than -25", () => {
        expect(caesar("", 0)).to.be.false && expect(caesar("", 26)).to.be.false && expect(caesar("", -26)).to.be.false;
    });
    it("should ignore capital letters", () => {
        const expected = "cheud pdjdclqh";
        const actual = caesar("ZEBRA MAGAZINE", 3);
        expect(actual).to.eql(expected);
    });
    it("should wrap around the alphabet if shifted out of bounds", () => {
        expect(caesar("xyz", 3)).to.equal("abc") && expect(caesar("abc", -3)).to.equal("xyz");
    });
    it("should maintain space and and other nonalphabetical symbols in the message", () => {
        const expected = "! ? &*^ @";
        expect(caesar("! ? &*^ @", 3)).to.equal(expected);
    });
    it("decode the message back to the original", () => {
        const expected = "zebra magazine";
        const actual = caesar("cheud pdjdclqh", 3, false);
        expect(actual).to.equal(expected);
    });
});