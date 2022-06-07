function recursiveFibonacci(n) {
  if (n < 2) return n;
  else return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(8));
console.log(recursiveFibonacci(9));
// O(n) - Iterative
// O(n^2) - Recursive
