function caesarCipher(string){
    let splittedStringArray = string.split(""); //to store lowerCase or upperCase, for later checking
    let loweredCaseString = string.toLowerCase();
    let originalIndex = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let cypheredIndex = ['b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a']
    let cypheredResultArray = [];
    for(let i = 0; i < splittedStringArray.length; i++){
        for(let j = 0; j<originalIndex.length;j++){
            if(loweredCaseString[i] == originalIndex[j] && splittedStringArray[i] === splittedStringArray[i].toLowerCase()){
                cypheredResultArray.push(cypheredIndex[j].toLowerCase());
            } else if (loweredCaseString[i] == originalIndex[j] && splittedStringArray[i] === splittedStringArray[i].toUpperCase()) {
                cypheredResultArray.push(cypheredIndex[j].toUpperCase());
            } else if (!originalIndex.includes(loweredCaseString[i])) { //handle punctuation
                cypheredResultArray.push(loweredCaseString[i]);
                break;
            }      
        }
    }
    return cypheredResultArray.join('');
}

module.exports = caesarCipher