import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let result = 0
  let arr1 = Array.from(s1)
  let arr2 = Array.from(s2)
  while(arr1.length > 0) {
    let ch = arr1.pop()
    if(arr2.includes(ch)) {
      result++
      arr2.splice(arr2.indexOf(ch), 1)
    }
  }
  return result
}
