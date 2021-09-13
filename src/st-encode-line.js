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
  let result = '';
  let count = 0 ;
  for(let i = 0; i < str.length; i++){
      count += 1;
      if(str[i] !== str[i+1]){
          if(count === 1){
              result = result + str[i];
          } else{
              result = result + count + str[i];
          }  
          count = 0;
      }
  }
  return result
}

