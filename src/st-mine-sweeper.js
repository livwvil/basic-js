import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let field = Array.from(Array(matrix.length), () => new Array(matrix[0].length).fill(0))
  matrix.forEach((row, rx) => {
    row.forEach((cell, cx) => {
      if(cell){
        if(rx != 0) {
          field[rx-1][cx]++
          if(cx != 0) {
            field[rx-1][cx-1]++
          }
          if(cx != matrix[0].length - 1) {
            field[rx-1][cx+1]++
          }
        }
        if(rx != matrix.length - 1) {
          field[rx+1][cx]++
          if(cx != 0)
            field[rx+1][cx-1]++
          if(cx != matrix[0].length - 1)
            field[rx+1][cx+1]++
        }
        if(cx != 0) {
          field[rx][cx-1]++
        }
        if(cx != matrix[0].length - 1) {
          field[rx][cx+1]++
        }
      }
    })
  })
  return field
}
