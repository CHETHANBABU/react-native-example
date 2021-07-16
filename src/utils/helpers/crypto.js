import CryptoJS from 'crypto-js';

/**
   * Encrypting password using secrete key.
   * @param password entered by User
   * @param skey secrete key
   */
  export function encryptPassword(password, skey = ''){
    const key = CryptoJS.enc.Utf8.parse(skey);
    const civ = CryptoJS.enc.Utf8.parse('encryptionIntVec');
    const encryptedPassword = CryptoJS.AES.encrypt(password, key, {
      iv: civ,
      keySize: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encryptedPassword;
  }