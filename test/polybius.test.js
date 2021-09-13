const { expect } = require("chai");
const polybius = require("../src/polybius.js").polybius;

describe("polybius", () => {
    it("should return encrypted message with given input", () => {
        const expected = "4432423352125413";
        const actual = polybius("Thinkful");
        expect(actual).to.eql(expected);
    });
    it("should translate (i/j) with 42", () => {
        expect(polybius("42", false)).to.equal("(i/j)");
    });
    it("should ignore capital letters", () => {
        const expected = polybius("a message");
        const actual = polybius("A MESSAGE");
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces before and after encoding and decoding", () => {
        const encode = polybius("a message with spaces");
        const decode = polybius("11 23513434112251 25424432 345311315134", false);
        expect(encode.includes(" ")).to.be.true && expect(decode.includes(" ")).to.be.true;
    });
});