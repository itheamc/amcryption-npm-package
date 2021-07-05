/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * These are supporters function
 * @returns - these functions are return the arrays
 */


// Function to generate char A -Z
const generateA2Z = () => {
    let upperChars = [26];
    let index = 0;
    for (let i = 65; i < 91; i++) {
        upperChars[index] = String.fromCharCode(i);
        index++;
    }

    return upperChars;
};

// Function to generate char a-z
const generatea2z = () => {
    let lowerChars = [26];
    let index = 0;
    for (let i = 97; i < 123; i++) {
        lowerChars[index] = String.fromCharCode(i);
        index++;
    }

    return lowerChars;
};

// Function to generate number from 0 - 9
const generateNumChars = () => {
    let numChars = [10];
    for (let i = 0; i < 10; i++) {
        numChars[i] = i.toString();
    }

    return numChars;
};

// Function to generate random Charsequences
const charSequences = (lowerChars, upperChars) => {
    let charSeq = [];
    let m = 6,
        n = 17;

    for (let i = 0; i < lowerChars.length; i++) {
        if (n < 26) {
            if (i % 3 === 0) {
                charSeq[i] =
                    upperChars[n] + lowerChars[lowerChars.length - 1 - i] + upperChars[i];
            } else if (i % 5 === 0) {
                charSeq[i] =
                    lowerChars[lowerChars.length - 1 - i] + upperChars[n] + lowerChars[i];
            } else {
                charSeq[i] =
                    lowerChars[lowerChars.length - 1 - i] + upperChars[i] + upperChars[n];
            }
            n++;
        } else {
            if (i % 2 === 0) {
                charSeq[i] =
                    upperChars[i] + lowerChars[lowerChars.length - 1 - i] + upperChars[m];
            } else if (i % 7 === 0) {
                charSeq[i] =
                    lowerChars[m] + upperChars[i] + lowerChars[lowerChars.length - 1 - i];
            } else {
                charSeq[i] =
                    lowerChars[i] + upperChars[m] + upperChars[lowerChars.length - 1 - i];
            }
            m++;
        }
    }

    return charSeq;
};

// Function to generate random Charsequences 1
const charSequences1 = (lowerChars, upperChars) => {
    let charSeq = [];
    let m = 0,
        n = 11;

    for (let i = 0; i < lowerChars.length; i++) {
        if (n < 26) {
            if (i % 2 === 0) {
                charSeq[i] =
                    lowerChars[n] + upperChars[lowerChars.length - 1 - i] + lowerChars[i];
            } else if (i % 5 === 0) {
                charSeq[i] =
                    upperChars[lowerChars.length - 1 - i] + lowerChars[i] + upperChars[n];
            } else {
                charSeq[i] =
                    lowerChars[i] + upperChars[n] + upperChars[lowerChars.length - 1 - i];
            }
            n++;
        } else {
            if (i % 2 === 0) {
                charSeq[i] =
                    lowerChars[m] + upperChars[lowerChars.length - 1 - i] + lowerChars[i];
            } else if (i % 5 === 0) {
                charSeq[i] =
                    upperChars[lowerChars.length - 1 - i] + lowerChars[i] + upperChars[m];
            } else {
                charSeq[i] =
                    lowerChars[i] + upperChars[m] + upperChars[lowerChars.length - 1 - i];
            }
            m++;
        }
    }

    return charSeq;
};

/* CharSequence2 */
const charSequences2 = (lowerChars, upperChars) => {
    let charSeq = [10];
    let m = 3;
    let n = 15;
    let o = 8;
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            charSeq[i] = lowerChars[n] + upperChars[m] + lowerChars[o];
        } else if (i % 5 === 0) {
            charSeq[i] = upperChars[o] + lowerChars[n] + upperChars[m];
        } else {
            charSeq[i] = lowerChars[m] + upperChars[n] + upperChars[o];
        }
        n++;
        m++;
        o++;
    }

    return charSeq;
};

module.exports = { generateA2Z, generatea2z, generateNumChars, charSequences, charSequences1, charSequences2 }