import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value = "") {
    this.chain.push(`${value}`)
    return this
  },
  removeLink(position) {
    if(this.chain[position-1] === undefined) {
      this.chain = []
      throw Error("You can't remove incorrect link!")
    }
    this.chain = this.chain.filter((_, ix) => ix != position-1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let res = this.chain.map(it => "( " + it + " )").join("~~");
    this.chain = []
    return res
  }
};
