const reverseString = require('./reverseString');

test('reversing a string',()=>{
    expect(reverseString('hello')).toBe('olleh')
})