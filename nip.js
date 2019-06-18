function generateNipDigits(nr) {

    var nipWithoutControlDigit = ""+nr;
    var controlDigit = calculateControlDigit(nipWithoutControlDigit);
    var nipNumber = nipWithoutControlDigit + controlDigit;
    return nipNumber;
}
function calculateControlDigit(nipWithoutControlDigit) {

    var wagi = [6, 5, 7, 2, 3, 4, 5, 6, 7];
    var cnt = 0;
    var nipLength = nipWithoutControlDigit.length;
    for (var i = 0; i < nipLength; i++) {
        cnt += nipWithoutControlDigit[i] * wagi[i];
    }
    return cnt % 11;
}
module.exports = generateNipDigits;