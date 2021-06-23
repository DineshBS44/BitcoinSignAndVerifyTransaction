var bitcoinMessage = require('bitcoinjs-message');

const walletAddress = "1jL9Sz9HceoCJJesHrMHTaCDXmvFjs9Tv";
const message = "1jL9Sz9HceoCJJesHrMHTaCDXmvFjs9Tv: Udacity rocks!";
const signature = "H7X6E570gS64WqpQD3VEBiWCciPVbLyO/vORLe+Ol/5McHgbiSU0xUB3mVDd+anVO62JX1RsY5ugpbLnZ1DE0Ns=";

console.log(bitcoinMessage.verify(message, walletAddress, signature));