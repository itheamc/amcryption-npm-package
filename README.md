# amcryption

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-image]][node-url]

Amcryption is a npm package that will help you to make your data more secure by encoding it with custom encoder as well as Base64 encoder at the same time. Since the data is encoded with our custom as well as Base64 encoder it will be hard to decode it.

## Installation

```sh
$ npm i amcryption
```
OR
```sh
$ yarn add amcryption
```

## API

```js
const amcryption = require('amcryption')
```

## How to use?
```js
const amcryption = require('amcryption')

/*
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
-=-=-=-=-=-=-= Creating the instance of the Encoder and Decoder class-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
const encoder = amcryption.getEncoder()
const decoder = amcryption.getDecoder()


/*
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=ENCODING THE DATA=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
let encoded_string = encoder.encode('...put your string data here...')

// For Example,
let encoded_email = encoder.encode('example@email.com')
// Encoded value will be =>  bllNbFdPeElDSC56ekxvckNJQXpLbllNdkdFSEB6dkdFekxvdlBrbllNQXpLblhjdkdF

/*
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=DECODING THE DATA=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
*/
let decoded_string = decoder.decode('...put your encoded string data here...')

// For example,
let decoded_email = decoder.decode('bllNbFdPeElDSC56dkdFekxvdlBrbllNQXpLblhjdkdFSEB6bFphYk1Zblhj')
// Decoded value will be => xyz@example.com

```

## License
Copyright(c) 2021 Amit <itheamc@gmail.com>
[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/amcryption.svg
[npm-url]: https://npmjs.org/package/amcryption
[node-image]: https://img.shields.io/node/v/amcryption.svg
[node-url]: http://nodejs.org/download/
[downloads-image]: https://img.shields.io/npm/dm/amcryption.svg
[downloads-url]: https://npmjs.org/package/amcryption