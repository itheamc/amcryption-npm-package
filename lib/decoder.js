/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * Importing the needed modules internally and from external packages
 */
const atob = require('atob');
const { generatea2z, generateA2Z, generateNumChars, charSequences, charSequences1, charSequences2 } = require('./supporters')



/**
    * Decoder Class - This is the static private class
    * It will consists all the variables
    * and
    * methods required to decode the data
    */
class Decoder {
    // Constructor
    constructor() {
        this.lowerChars = generatea2z();
        this.upperChars = generateA2Z();
        this.numChars = generateNumChars();
    }

    // Funxtion to decode the string
    decode = (string) => {
        let s = null;
        s = atob(string);
        let decodedString = "";
        for (let i = (s.length - 1); i >= 0; i--) {
            if ((i % 3) === 0) {
                decodedString = decodedString.concat(this.#decodeString(s.charAt(i) + s.charAt(i + 1) + s.charAt(i + 2)));
            }
        }

        return decodedString;
    };

    // Custom Decoding Method
    #decodeString = (s) => {
        let str = null;
        str = this.#decodeA2Z(s)

        if (str.length <= 0) {
            str = this.#decodea2z(s);

            if (str.length <= 0) {
                str = this.#decodeNums(s);

                if (str.length <= 0) {
                    str = this.#decodeOthersChar(s);
                }
            }
        }

        return str;
    };

    /*___________________________________Decoding Function____________________*/

    /*
    Function to decode [A - Z]
    */
    #decodeA2Z = (s) => {
        let str = "";
        let seq = charSequences(this.lowerChars, this.upperChars);
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === s) {
                str = this.upperChars[this.upperChars.length - 1 - i];
                break;
            }
        }

        return str;
    };

    /*
          Function to decode [a - z]
          */
    #decodea2z = (s) => {
        let str = "";
        let seq = charSequences1(this.lowerChars, this.upperChars);
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === s) {
                str = this.lowerChars[this.lowerChars.length - 1 - i];
                break;
            }
        }

        return str;
    };

    /*
          Function to decode [Numbers 0 - 9]
           */
    #decodeNums = (s) => {
        let str = "";
        let seq = charSequences2(this.lowerChars, this.upperChars);
        for (let i = 0; i < seq.length; i++) {
            if (seq[i] === s) {
                str = this.numChars[this.numChars.length - 1 - i];
                break;
            }
        }

        return str;
    };

    /*
          If other than known char are sent for decoding
           */
    #decodeOthersChar = (s) => {
        return s.charAt(1);
    };
}

module.exports = Decoder