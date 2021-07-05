# amcryption

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-image]][node-url]

Encode and decode your data with amcryption

## Installation

```sh
$ npm install amcryption
```

## API

```js
const amcryption = require('amcryption')
```

## How to use?
```js
const amcryption = require('amcryption')

// Creating the encoder and decoder constants to store the instance of the Encoder and Decoder class
const encoder = amcryption.getEncoder()
const decoder = amcryption.getDecoder()


// For encoding the data
let encoded_string = encoder.encode('...put your string data here...')

// For decoding the data
let encoded_string = decoder.decode('...put your encoded string data here...')

```

## License

[ISC](LICENSE)

[npm-image]: https://img.shields.io/npm/v/amcryption.svg
[npm-url]: https://npmjs.org/package/amcryption
[node-image]: https://img.shields.io/node/v/amcryption.svg
[node-url]: http://nodejs.org/download/
[downloads-image]: https://img.shields.io/npm/dm/amcryption.svg
[downloads-url]: https://npmjs.org/package/amcryption