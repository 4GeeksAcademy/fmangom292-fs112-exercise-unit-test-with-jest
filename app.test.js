const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected); 
})

test("One dollar should be 146.2616822429907 yen", function() {
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen (3.5);
    const expected = 3.5 * (156.5 / 1.07);

    expect(yens).toBe(expected);
})

test("One yen should be 0.0055591054313099 pounds", function() {
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound (3.5);
    const expected = 3.5 * (0.87 / 156.5);

    expect(pounds).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})