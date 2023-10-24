const capitalize = require('./capitalize');

test('first character of a string capitalized', ()=>{
    expect(capitalize('hello')).toBe('Hello');
})