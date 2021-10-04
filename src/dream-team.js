import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 export default function createDreamTeam(members) {
  let array = []
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        array.push(members[i].trim().charAt(0))
      }
    }

    
    array = array.join('').toUpperCase()
    let sortStr = array.split('').sort().join('')
    return sortStr
  } else {
    return false
  }
}
