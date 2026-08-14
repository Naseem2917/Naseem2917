const crypto = require('crypto');
const fs = require('fs');

async function testDecrypt() {
  try {
    const encryptedData = fs.readFileSync('public/models/character.enc');
    const iv = encryptedData.subarray(0, 16);
    const data = encryptedData.subarray(16);
    
    const key = crypto.createHash('sha256').update('Character3D#@').digest();
    
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    
    console.log('Decrypted size:', decrypted.length);
    console.log('Header magic (first 4 bytes):', decrypted.subarray(0, 4).toString('utf8'));
    
    if (decrypted.subarray(0, 4).toString('utf8') === 'glTF') {
      console.log('SUCCESS: Valid GLTF binary file!');
    } else {
      console.log('FAIL: Decrypted buffer is not a valid GLTF!');
    }
  } catch (err) {
    console.error('Error during decryption:', err);
  }
}

testDecrypt();
