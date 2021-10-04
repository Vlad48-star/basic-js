import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let step = 0
  let obj1 = {}
  let obj2 = {}
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]]) {
      obj1[s1[i]]++
    } else {
      obj1[s1[i]] = 1
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (obj2[s2[j]]) {
      obj2[s2[j]]++
    } else {
      obj2[s2[j]] = 1
    }
  }
  Object.keys(obj1).map((el, index) => {
    if (obj2[el]) {
      step += Math.min(obj2[el], obj1[el])
    }
  })
  return step
}
