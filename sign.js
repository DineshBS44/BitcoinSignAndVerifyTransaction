var bitcoin = require('bitcoinjs-lib');
var bitcoinMessage = require('bitcoinjs-message');

const message = "This is Dinesh"; // This is the message to sign

var keyPair = bitcoin.ECPair.fromWIF('Put any private key here'); // To include private key

var privateKey = keyPair.privateKey;

var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed);

console.log(signature.toString('base64'));
