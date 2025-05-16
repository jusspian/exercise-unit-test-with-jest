const sum = (a,b) =>{
    return a+b
}

console.log(sum(7,3))

module.exports = {sum}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0052;
    // return the dollar value
    return valueInPound;
}

module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}