function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  } else {
    return (n & (n - 1)) === 0;
  }
}
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(24)); // false
console.log(isPowerOfTwoBitWise(32)); // true
// Big-O ..... O(1)

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }
//     n = n / 2;
//   }
//   return true;
// }
// console.log(isPowerOfTwo(1)); // true
// console.log(isPowerOfTwo(2)); // true
// console.log(isPowerOfTwo(24)); // false
// console.log(isPowerOfTwo(32)); // true
// Big-O ...... O(logn)
