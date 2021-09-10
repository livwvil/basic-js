import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if(str === "")
  return ""
  let arr = Array.from(str)
  let curChar = arr.shift()
  let count = 1
  let result = ""
  arr.forEach((it, ix) => {
    if(it === curChar) {
      count++
    }
    else {
      result += ((count === 1 ? "" : count) + curChar)
      count = 1
      curChar = it
    }
  })
  return result + ((count === 1 ? "" : count) + curChar)
}
