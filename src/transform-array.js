import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr))
    throw Error(`'arr' parameter must be an instance of the Array!`)
  let [rmn, rmp, dn, dp] = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"]
  let isNotCommand = it => it !== rmn && it != rmp && it != dn && it != dp
  let res = []
  arr.forEach((it, ix, a) => {
    let next = a[ix+1]
    let prev = a[ix-1]
    
    if (it == dn && a[ix+2] != rmp) {
      if(next != undefined)
        res.push(next)
    } else if (it == dp && a[ix-2] != rmn) {
      if(prev != undefined)
        res.push(prev)
    } else if(prev === rmn && next != dp) {
      return
    } else if (next == rmp && prev != dn) {
      return
    } else if (next == dp && prev == rmn) {
      return
    }


    if(isNotCommand(it))
      res.push(it)
  })
  return res
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))