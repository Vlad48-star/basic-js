import { NotImplementedError } from '../extensions/index.js';

export default function getSumOfDigits(n) {
    if(n<10){
        return n
    }
    let sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return getSumOfDigits(sum);
}
