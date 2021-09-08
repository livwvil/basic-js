import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if(date === undefined)
    return "Unable to determine the time of year!"
  
  if(!(date instanceof Date))
    throw Error("Invalid date!")
  
  try {
    let time = date.getTime()
    if(isNaN(time))
      throw Error("Invalid date!")
      
    return ["winter", "spring", "summer", "autumn"][Math.floor((date.getMonth()+1) / 3) % 4]
  } catch (e) {
    throw Error("Invalid date!")
  }
   
}