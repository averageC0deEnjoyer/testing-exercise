const caesarCipher = require('./caesarCipher');

test('move char to index + 1, example a to b , b to c',()=>{
    expect(caesarCipher('abcd')).toBe('bcde');
})


test('move char to index + 1, example a to b , b to c, punctuation',()=>{
    expect(caesarCipher('ab.cd')).toBe('bc.de');
})

test('move char to index + 1, example a to b , b to c, capitalize',()=>{
    expect(caesarCipher('aB.cD')).toBe('bC.dE');
})