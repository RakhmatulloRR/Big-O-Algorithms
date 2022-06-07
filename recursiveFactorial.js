function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return recursiveFactorial(n - 1) * n;
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120

// Big-O ..... O(n)
