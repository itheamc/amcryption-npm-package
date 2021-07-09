/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * Importing the needed modules from external packages
 */
const crypto = require('crypto');


/**
 * Crypto Class
 */
class Crypto {
    constructor() {
        this.x1 = 'aes-256-ctr';
        this.y2 = '0c285192f50ca659bdb875a409324c57';
        this.z3 = '0d30f7337d8e3d6644e63666ad24187d';
    }

    // Function to encrypt the data
    encrypt = (text) => {

        const cipher = crypto.createCipheriv(this.x1, this.y2, Buffer.from(this.z3, 'hex'));

        const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);


        return encrypted.toString('hex')
    };

    // Function to decrypt the data
    decrypt = (encrypted_data) => {

        const decipher = crypto.createDecipheriv(this.x1, this.y2, Buffer.from(this.z3, 'hex'));

        const decrpyted = Buffer.concat([decipher.update(Buffer.from(encrypted_data, 'hex')), decipher.final()]);

        return decrpyted.toString();
    };
}

module.exports = Crypto