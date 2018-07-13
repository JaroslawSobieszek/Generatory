describe("Nip tests", function () {
    var generateNipDigits = require('../nip.js');
    it("should correct nip with 9 digits", function() {
        let nip = generateNipDigits(37884108);
        expect(nip).toEqual("378841082");
    });
    it("should be correct numbers of 9 digits", function () {
        let nip = generateNipDigits(96599822);
        expect(nip.length).toEqual(9);
    });
    it("should properly calculated control digit ", function () {
        let nip = generateNipDigits(57630155);
        expect(nip[8]).toBe('7');
    });
});