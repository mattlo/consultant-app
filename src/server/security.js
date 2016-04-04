import uuid from 'node-uuid';
import crypto from 'crypto';

const key = uuid.v4();
const alg = 'aes-256-ctr';

export function encrypt(text) {
  const cipher = crypto.createCipher(alg, key);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
}

export function decrypt(text) {
  const decipher = crypto.createDecipher(alg, key);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}
