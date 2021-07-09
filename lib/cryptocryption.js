/*!
 * amcryption - a encoding and decoding module
 * Copyright(c) 2021 @mit <itheamc@gmail.com>
 * ISC Licensed
 */

'use strict';

/**
 * Importing the needed modules internally and from external packages
 */
const crypto = require('crypto');
const Decoder = require('./decoder')
const d = new Decoder()


/**
 * Crypto Class
 */
class Crypto {
    constructor(data) {
        this.x1 = 'aes-256-ctr';
        this.sjdgjh = data;
    }

    // Function to encrypt the data
    encrypt = (text) => {

        try {
            const cipher = crypto.createCipheriv('aes-256-ctr', d.decode(this.sjdgjh.cipher), Buffer.from(d.decode(this.sjdgjh.iv), 'hex'));

            const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

            return encrypted.toString('hex')
        } catch (error) {
            return "******"
        }

    };

    // Function to decrypt the data
    decrypt = (encrypted_data) => {

        try {
            const decipher = crypto.createDecipheriv('aes-256-ctr', d.decode(this.sjdgjh.cipher), Buffer.from(d.decode(this.sjdgjh.iv), 'hex'));

            const decrpyted = Buffer.concat([decipher.update(Buffer.from(encrypted_data, 'hex')), decipher.final()]);

            return decrpyted.toString();
        } catch (error) {
            return "******"
        }

    };
}

module.exports = Crypto