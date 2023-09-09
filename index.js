/**

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.



*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
          let rem = 1;
          let r = digits.length - 1;
          while(rem != 0){
              if(r == 0 && digits[r] == 9){
                  digits[r] = 0;
                  digits.unshift(1);
                  break;
              }
              digits[r] = digits[r] + rem;
                if(digits[r] == 10){
                 digits[r] = 0;
                 rem = 1;
                 r--;
             }else{
                 rem = 0;
             }   
          }
    return digits;
};
