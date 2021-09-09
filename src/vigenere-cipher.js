import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(noreverse) {
    this.reverse = noreverse === false ? true : false 
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined)
      throw Error("Incorrect arguments!")
    
    let result = ""
    let ix = 0
    Array.from(message).forEach(it => {
      let encoded = it
      if(/^[a-zA-Z]+$/.test(it)) {
        let charCode = it.toUpperCase().charCodeAt(0) - 65
        let keyCharCode = key[ix % key.length].toUpperCase().charCodeAt(0) - 65
        encoded = String.fromCharCode((charCode + keyCharCode) % 26 + 65)
        ix++
      }
      result += encoded
    })
    return this.reverse ? Array.from(result.toUpperCase()).reverse().join("") : result.toUpperCase()
  }
  decrypt(message, key) {
    if(message === undefined || key === undefined)
      throw Error("Incorrect arguments!")
    
    let result = ""
    let ix = 0
    Array.from(message).forEach(it => {
      let decoded = it
      if(/^[a-zA-Z]+$/.test(it)) {
        let charCode = it.toUpperCase().charCodeAt(0) - 65
        let keyCharCode = key[ix % key.length].toUpperCase().charCodeAt(0) - 65
        decoded = String.fromCharCode((charCode - keyCharCode + 26) % 26 + 65)
        ix++
      }
      result += decoded
    })
    return this.reverse ? Array.from(result.toUpperCase()).reverse().join("") : result.toUpperCase()
  }
}
