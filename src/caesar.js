// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {

    function caesar(input, shift, encode = true) {
        if (shift > 25 || shift < -25 || shift == 0) return false;
        let result = "";
        const inputLower = input.toLowerCase();
        for (let i = 0; i < input.length; i++) {
            //using ascii values to check if input is a alphabetical character
            let asciiVal = inputLower.charCodeAt(i);
            if (asciiVal >= 97 && asciiVal <= 122) {
                encode === false ? asciiVal += -shift : asciiVal += shift;
                //adding or subtracting 26 from the ascii val will wrap the letters around
                if (asciiVal < 97) asciiVal += 26;
                else if (asciiVal > 122) asciiVal += -26;
            }
            //converting the ascii decimal values into string value    
            result += String.fromCharCode(asciiVal);
        }
        return result;
    }
    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };