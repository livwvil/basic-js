import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = `${str}`
  options = options || {}
  let t = options.repeatTimes || 1
  let s = options.separator || "+"
  let a = options.addition !== undefined ? `${options.addition}` : ""
  let at = options.additionRepeatTimes || 1
  let as = options.additionSeparator || "|"
  let innerRepeater = (s, t, sep) => Array(t).fill(s).join(sep)
  return innerRepeater(str + innerRepeater(a, at, as), t, s)
}
