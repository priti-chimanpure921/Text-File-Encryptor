
let encryptor = require('file-encryptor');
let fs = require('fs');
let path = require('path');

let key = 'My Super Secret Key';

let encrypt = function(input) {
  encryptor.encryptFile(
    path.join(__dirname, input),
    path.join(__dirname, input + '.data'),
    key,
    function(err) {
      console.log(input + ' encryption complete.');
      decrypt(input, input + '.data');
    }
  );
};

var decrypt = function(original, encrypted) {
  encryptor.decryptFile(
    path.join(__dirname, encrypted),
    path.join(__dirname, 'decrypted.' + original),
    key,
    function(err) {
      console.log(original + ' decryption complete.');
    }
  );
};

encrypt('example.txt');