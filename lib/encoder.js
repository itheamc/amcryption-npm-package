/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * Importing the needed modules internally and from external packages
 */
const btoa = require('btoa');
const { generatea2z, generateA2Z, generateNumChars, charSequences, charSequences1, charSequences2 } = require('./supporters')

/**
    * Encoder Class - This is the static private class
    * It will consists all the variables
    * and
    * methods required to encode the data
    */
class Encoder {
    // Constructors
    constructor() {
        this.lowerChars = generatea2z();
        this.upperChars = generateA2Z();
        this.numChars = generateNumChars();
    }

    //   function to encode the string
    encode = (string) => {
        // Encoding number with custom encoder
        let encodedString = "";
        for (let i = string.length - 1; i >= 0; i--) {
            encodedString = encodedString.concat(this.#encodeChar(string.charAt(i)));
        }

        return btoa(encodedString);
    };

    // Custom Encoder method
    #encodeChar = (c) => {
        let s = this.#encodeA2Z(c);

        if (s.length <= 0) {
            s = this.#encodea2z(c);

            if (s.length <= 0) {
                s = this.#encodeNums(c);

                if (s.length <= 0) {
                    s = this.#encodeOthersChar(c);
                }
            }
        }

        return s;
    };

    /*
    Function to encode [A - Z]
    */
    #encodeA2Z = (c) => {
        let s = "";
        let seq = charSequences(this.lowerChars, this.upperChars);
        for (let i = 0; i < this.upperChars.length; i++) {
            if (this.upperChars[i] === c) {
                s = seq[seq.length - 1 - i];
                break;
            }
        }

        return s;
    };

    /*
   Function to encode [a - z]
   */
    #encodea2z = (c) => {
        let s = "";
        let seq = charSequences1(this.lowerChars, this.upperChars);
        for (let i = 0; i < this.lowerChars.length; i++) {
            if (this.lowerChars[i] === c) {
                s = seq[seq.length - 1 - i];
                break;
            }
        }

        return s;
    };

    /*
    Function to encode [Numbers 0 - 9]
   */
    #encodeNums = (c) => {
        let s = "";
        let seq = charSequences2(this.lowerChars, this.upperChars);
        for (let i = 0; i < this.numChars.length; i++) {
            if (this.numChars[i] === c) {
                s = seq[seq.length - 1 - i];
                break;
            }
        }

        return s;
    };

    /*
  If other than known char are sent for encoding
   */
    #encodeOthersChar = (c) => {
        return this.upperChars[7] + c + this.lowerChars[25];
    };
}

module.exports = Encoder