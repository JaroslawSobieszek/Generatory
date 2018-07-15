describe("Nip tests", function () {
    var generateNipDigits = require('../nip.js');
    it("should correct nip with 9 digits", function() {
        let nip = generateNipDigits(37884108);
        expect(nip).toEqual("378841082");
    });
});