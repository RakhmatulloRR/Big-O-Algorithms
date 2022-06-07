// Big-O time complexity
function summation(n) {
  if (n === 1) {
    return 1;
  }
  return summation(n - 1) + n;
}
console.log(summation(30));
// O(n) -> Linear
