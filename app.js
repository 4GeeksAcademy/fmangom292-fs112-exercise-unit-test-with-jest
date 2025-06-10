const sum = (a,b) => {
    return a + b
}
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
}

const fromDollarToYen = function(valueInDollar) {
    return valueInDollar * (oneEuroIs.JPY / oneEuroIs.USD);
}

const fromYenToPound = function(valueInYen) {
    return valueInYen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

// Exporta las funciones
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
