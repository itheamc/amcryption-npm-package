/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * Importing the needed modules internally
 */
const Encoder = require('./encoder')
const Decoder = require('./decoder')
const Crypto = require('./cryptocryption')


/**
 * Amcryption - This is the main class
 * It consists the inner static private class 
 * Encoder - Consists all the constants and methods required for encoding the data
 * and
 * Decoder - Consists all the constants and methods required for decoding the data
 * It also consists the static method
 * getEncoder() and getDecoder() to get the instance of the respective class
 */

class Amcryption {

    // Static function to retunr the instance the encoder class
    static getEncoder = function () {
        return new Encoder();
    }

    // Static function to retunr the instance the decoder class

    static getDecoder = function () {
        return new Decoder();
    }

    // Static function to retunr the instance the Crypto class
    static getCrypto = function () {
        return new Crypto();
    }

}

module.exports = Amcryption