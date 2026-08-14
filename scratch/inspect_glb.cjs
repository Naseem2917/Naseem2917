const crypto = require('crypto');
const fs = require('fs');

async function inspectGLB() {
  try {
    const encryptedData = fs.readFileSync('public/models/character.enc');
    const iv = encryptedData.subarray(0, 16);
    const data = encryptedData.subarray(16);
    const key = crypto.createHash('sha256').update('Character3D#@').digest();
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    
    // Parse GLB JSON chunk
    const jsonChunkLength = decrypted.readUInt32LE(12);
    const jsonChunkType = decrypted.readUInt32LE(16);
    const jsonString = decrypted.toString('utf8', 20, 20 + jsonChunkLength);
    const gltfJson = JSON.parse(jsonString);
    
    console.log('Nodes in GLTF:');
    gltfJson.nodes.forEach((node, index) => {
      if (node.name) console.log(`Node ${index}: ${node.name} (children: ${JSON.stringify(node.children)})`);
    });
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectGLB();
