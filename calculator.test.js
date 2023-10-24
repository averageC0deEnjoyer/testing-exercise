const calculator = require('./calculator');

test('adding number using calculator add method',()=>{
    expect(calculator.add(5,3)).toBe(8);
})

test('substracting number using calculator sub method',()=>{
    expect(calculator.sub(5,3)).toBe(2);
})

test('multiply number',()=>{
    expect(calculator.mul(5,3)).toBe(15);
})

test('division number',()=>{
    expect(calculator.div(6,3)).toBe(2);
})