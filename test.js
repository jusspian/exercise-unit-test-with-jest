const {sum}=require('./app.js');

test('adds 14 + 9 to equal 23',()=>{
    let total = sum (14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

    
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("One dollar should be 156.5 yens", function() {
    
    const {fromDollarToYen} = require('./app.js');

    
    const yens = fromDollarToYen(5);

    
    const expected = 5 * 156.5;

   
    expect(fromDollarToYen(5)).toBe(782.5); // 
});

test("One Yen should be 0.0052 yens", function() {
    
    const {fromYenToPound} = require('./app.js');

    
    const pounds = (fromYenToPound(50));

    
    const expected = 50 * 0.0052;

   expect(fromYenToPound(50)).toBe(0.26); 

   });

