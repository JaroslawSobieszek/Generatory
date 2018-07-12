function generateDigitRegon(nr) {
    var regonBezSumyKontrolnej = "" + nr;
    // console.log("regonBezSumyKontrolnej: " + regonBezSumyKontrolnej);
    var sumaKontrolna = getControlDigit(regonBezSumyKontrolnej);
    var regon;
    // console.log("sumaKontrolna: " + sumaKontrolna);
    if (sumaKontrolna !=0){
    regon = regonBezSumyKontrolnej + sumaKontrolna;
    } else {   
        regon = "Wrong regon length";
    }
    return regon;
}

function getControlDigit(regonBezSumyKontrolnej) {

    var wagi8 = [8, 9, 2, 3, 4, 5, 6, 7];
    var wagi13 = [2, 4, 8, 5, 0, 9, 7, 3, 6, 1, 2, 4, 8];
    var controlDigit = 0;
    var regonLength = regonBezSumyKontrolnej.length;

    if (regonLength == 8) {
        controlDigit = calculateControlDigit(regonBezSumyKontrolnej, wagi8);
    } else if (regonLength == 13) {
        controlDigit = calculateControlDigit(regonBezSumyKontrolnej, wagi13)
    } 
    return controlDigit;
}

function calculateControlDigit(regonBezSumyKontrolnej, wagi) {
    var cnt = 0;
    var regonLength = regonBezSumyKontrolnej.length;

    for (var i = 0; i < regonLength; i++) {
        cnt += regonBezSumyKontrolnej[i] * wagi[i];
        controlDigit = cnt % 11;
    }
    return controlDigit;
}



console.log("generateDigitRegon(75647368): " + generateDigitRegon(75647368));

console.log("generateDigitRegon(7564736873174): " + generateDigitRegon(7564736873174));
console.log("generateDigitRegon(76): " + generateDigitRegon(75)); // Wrong regon length.


