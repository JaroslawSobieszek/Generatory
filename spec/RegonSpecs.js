describe("Regon tests", function () {
    var generateDigitRegon = require('../regon.js');
    it("should correct regon with 9 digits", function() {
        let regon = generateDigitRegon(44446454);
        expect(regon).toEqual('444464543');
    });
    it("should correct regon with 14 digits", function() {
        let regon = generateDigitRegon(9846666134493);
        expect(regon).toEqual('98466661344934');
    });
    it("should be correct numbers of 9 digits", function () {
        let regon = generateDigitRegon(27384958);
        expect(regon.length).toEqual(9);
    });
    it("should be correct numbers of 14 digits", function () {
        let regon = generateDigitRegon(2738495884524);
        expect(regon.length).toEqual(14);
    });
    it("should be correct answer if number of digits inadequate", function () {
        let regon = generateDigitRegon(6246);
        expect(regon).toEqual("Wrong regon length");
    });
    it("should properly calculated control digit ", function () {
        let regon = generateDigitRegon(27384958);
        expect(regon[8]).toBe('3');
    });
    it("should properly calculated control digit", function () {
        let regon = generateDigitRegon(2738495884524);
        expect(regon[13]).toBe('8');
    });
});