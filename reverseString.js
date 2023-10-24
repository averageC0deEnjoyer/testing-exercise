function reverseString(string){
    let splittedString = string.split("");
    let reversedString = [];
    for(let i = splittedString.length - 1; i >= 0; i--){
        reversedString.push(splittedString[i]);
    }
    return reversedString.join("")
}

module.exports = reverseString