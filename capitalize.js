function capitalize(string){
    let resultString;
    let firstCharacter = string.slice(0,1).toUpperCase();
    let restOfCharacter = string.slice(1);
    resultString = firstCharacter + restOfCharacter;
    return resultString;
}

module.exports = capitalize;