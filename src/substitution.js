// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    //a helper function that checks input for duplicates  
    function checkDuplicate(str) {
        for (let i = 0; i < str.length; i++) {
            //checks if a char occurs atleast once or returns false;
            let matched = 0;
            for (let j = 0; j < str.length; j++) {
                if (str[i] === str[j]) {
                    matched++;
                    if (matched == 2) return true;
                }
            }
        }
        return false;
    }

    function substitution(input, alphabet, encode = true) {
        if (alphabet === undefined || checkDuplicate(alphabet) || alphabet.length !== 26) return false;
        const inputLower = input.toLowerCase();
        let result = "";
        for (let i = 0; i < input.length; i++) {
            //made a variable element that would hold the order of given letter in
            //the ascii alphabet then use it on given alphabet
            let element = 0;
            if (inputLower[i] === " ") result += inputLower[i];
            else if (encode === true) {
                if (inputLower.charCodeAt(i) < 97 || inputLower.charCodeAt(i) > 122) result += inputLower[i];
                element = inputLower.charCodeAt(i) - 97;
                result += alphabet[element];
            } else {
                //finds the position of char in given alphbet and gets back char from 
                //ascii alphabet 
                element = alphabet.indexOf(inputLower[i]) + 97;
                result += String.fromCharCode(element);
            }
        }
        return result;
    }
    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };