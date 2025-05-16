const {sum}=require('./app.js');

test('adds 14 + 9 to equal 23',()=>{
    let total = sum (14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 156.5 yens", function() {
    // Importo la funcion desde app.js
    const {fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(5);

    // Si 1 dolar son 156.5 yenes, entonces 5 debe ser (5 * 156.5)
    const expected = 5 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(5)).toBe(782.5); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One Yen should be 0.0052 yens", function() {
    // Importo la funcion desde app.js
    const {fromYenToPound} = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = (fromYenToPound(50));

    // Si 1 yen son 0.0052 libras, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 50 * 0.0052;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(50)).toBe(0.26); // 50 yenes son 0.26 libras, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

