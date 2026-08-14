const crypto = require('crypto');
const fs = require('fs');

async function inspectAnimations() {
  try {
    const encryptedData = fs.readFileSync('public/models/character.enc');
    const iv = encryptedData.subarray(0, 16);
    const data = encryptedData.subarray(16);
    const key = crypto.createHash('sha256').update('Character3D#@').digest();
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    
    // Parse GLB JSON chunk
    const jsonChunkLength = decrypted.readUInt32LE(12);
    const jsonString = decrypted.toString('utf8', 20, 20 + jsonChunkLength);
    const gltfJson = JSON.parse(jsonString);
    
    console.log('Animations count:', gltfJson.animations ? gltfJson.animations.length : 0);
    if (gltfJson.animations) {
      gltfJson.animations.forEach((anim, i) => {
        console.log(`Anim ${i}: name=${anim.name}, samplers=${anim.samplers ? anim.samplers.length : 0}, channels=${anim.channels ? anim.channels.length : 0}`);
        if (anim.channels) {
          anim.channels.slice(0, 5).forEach((ch, j) => {
            const targetNode = gltfJson.nodes[ch.target.node];
            console.log(`  Channel ${j}: node=${targetNode ? targetNode.name : ch.target.node}, path=${ch.target.path}`);
          });
        }
      });
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

inspectAnimations();
