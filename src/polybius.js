// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function() {
    //initializing the polybius square  
    const alphabet = [
        ['a', 'b', 'c', 'd', 'e'],
        ['f', 'g', 'h', '(i/j)', 'k'],
        ['l', 'm', 'n', 'o', 'p'],
        ['q', 'r', 's', 't', 'u'],
        ['v', 'w', 'x', 'y', 'z']
    ];
    //helper function that gets the string value of position
    //of given character withing the polybius square
    function encodeHelper(char) {
        let result = "";
        if (char === " ") return " ";
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (alphabet[i][j].includes(char)) {
                    i++;
                    j++;
                    result = j.toString() + i.toString();
                    break;
                }
            }
        }
        return result;
    }
    //helper function that returns character from the
    //polybius square with given 2d position
    function decodeHelper(num1, num2) {
        num1--;
        num2--;
        return alphabet[num1][num2];

    }

    function polybius(input, encode = true) {
        let result = "";
        const inputLower = input.toLowerCase();
        if (encode === true) {
            for (let i = 0; i < input.length; i++) {
                result += encodeHelper(inputLower[i]);
            }
        } else {
            //scans input to check if it is a space or a string number  
            if (input.split(" ").join("").length % 2) return false;
            for (let i = 0; i < input.length - 1; i++) {
                if (input[i] === " ") result += " ", i--;
                else result += decodeHelper(parseInt(input[i + 1]), parseInt(input[i]));
                i++;
            }
        }
        return result;
    }
    return {
        polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };