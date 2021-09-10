import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let result = 0
  matrix.forEach((row, rx) => {
    row.forEach((cell, cx) => {
      if(rx === 0) {
        result += cell
      } else if(Array(rx).fill(0).reduce((acc, _, ix) => acc && (matrix[ix][cx] !== 0), true)) {
        result += cell
      }
    })
  })
  return result
}
