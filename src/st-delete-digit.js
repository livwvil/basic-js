import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  return Math.max(...Array.from(String(n)).map((it, ix, arr) => {
    let tmp = [...arr]
    tmp.splice(ix,1)
    return parseFloat(tmp.join(""))
  }))
}
