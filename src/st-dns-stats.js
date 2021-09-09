import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let roots = { fullName: "" }
  let smth = domains
              .map(it => it.split(".").reverse().join("."))
              .reverse()
              .map(it => it.split("."))
  smth.forEach(domain => {
    let root = roots
    domain.forEach(token => {
      if(!root.hasOwnProperty(token)) {
        root[token] = {count: 0, fullName: root.fullName + "." + token}
      }
      root[token].count++
      root = root[token]
    })
  })
  let getter = (root, res = {}) => {
    if(root.count !== undefined)
      res[root.fullName] = root.count
    for(let i in root){
      if(typeof root[i] === "object")
        getter(root[i], res)
    }
    return res
  }

  return getter(roots)
}
