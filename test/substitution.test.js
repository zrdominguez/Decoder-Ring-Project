const { expect } = require("chai");
const substitution = require("../src/substitution.js").substitution;

describe("substitution", () => {
    it("should return false if alphabet is not 26 letters long", () => {
        const actual = substitution("", "albshueowk");
        expect(actual).to.be.false;
    });
    it("should correctly translate given word based on given alphabet", () => {
        const expected = "ykrrpik";
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    });
    it("should return false if duplicates are in alphabet", () => {
        const actual = substitution("not unique", "asdfghjklpoiuytrdfghjklpoi");
        expect(actual).to.be.false;
    });
    it("should maintain spaces before and after encoding and decoding", () => {
        const encode = substitution("a message with spaces", "plmoknijbuhvygctfxrdzeswaq");
        const decode = substitution("p ykrrpik sbdj rtpmkr", "plmoknijbuhvygctfxrdzeswaq", false);
        expect(encode.includes(" ")).to.be.true && expect(decode.includes(" ")).to.be.true;
    });
    it("should ignore capital letters", () => {
        const expected = substitution("a message", "plmoknijbuhvygctfxrdzeswaq");
        const actual = substitution("A MESSAGE", "plmoknijbuhvygctfxrdzeswaq");
        expect(actual).to.equal(expected);
    });
});