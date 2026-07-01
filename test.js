const {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23)
})

test("One euro shoud be 1.07 dollars", function(){
   const dollars = fromEuroToDollar(1);
   expect(dollars).toBe(1.07);
});

test("One dollar should be 146.26 yen", function(){
    const yen = fromDollarToYen(1);
    expect(yen).toBeCloseTo(146.26)
})

test("One yen should be 0.00556 pounds approximately", function() {
    const pounds = fromYenToPound(1);
    expect(pounds).toBeCloseTo(0.00556);
});

