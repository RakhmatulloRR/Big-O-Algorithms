//! Space Complexity
// O(1) - Constant
// O(n) - Linear
// O(logn) - Logarithmic

//! Objects Big-O
// An object is a collection of key value pairs;
const obj = { key: "value" };
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Object.keys() - O(n)
// Object.values() - O(n)
// Object.entries() - O(n)

//! Array Big-O
// An array is an ordered collection of values
const arr = ["value1", "value2"];
// Insert/Remove at end - O(1)
// Insert/Remove at beginning - O(n)
// Access - O(1)
// Push/pop - O(1)
// Shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)

//! Math Algorithms
// Fibonacci sequence
// Factorial of a number
// Prime a number
// Power of two
// Recursion
// Fibonacci sequence with recurtion
// Factorial of a number with recurtion

//! The approach
// Problem statement
// Pouse the video and try solving the problem
// Implement the solution together
// Determine the Big-O of the solution

//! Fibonacci sequence
// Problem - Give a number 'n', find the first elements of the Fibonacci sequence;
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// The first two numbers in the sequence are 0 and 1;
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

// ! Big-O Guide
// Calculation not dependent of input size - O(1)
// 1 loop - O(n)
// 2 nested loop - O(n)
// Input size reduced by half - O(logn)

// ! Factorial of a number
// Problem - Give an integer "n", find the factorial of that integer
// In mathematics, the factorial of a non-negative integer "n", denoted n!, is the
// product of all the positive integers less than or equal to "n"
// factorial of zero is 1.
// factorial(0) - 1
// factorial(4) = 4*3*2*1 - 24
// factorial(5) = 5*4*3*2*1 - 120

// ! Prime Number
// Problem - Give a natural number "n", determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// isPrime(5) = true (5*1 or 1*5);
// isPrime(4) = false (4*1 or 2*2 or 1*4);

//! Optimized Primality Test
// Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one of the two
// factor 'a' and 'b' less than  or equal to the square root of 'n'.
// n = 24, a = 4 and b = 6
// The square root of 24 is 4.89 -> 4 is less then 4.89
// The square root of 35 is 5.91 -> 5 is less then 5.91
// a is less then the square root of n

//& ==== 10-dars ====
// ! Power of two
// Give a positive integer "n", determine if the number is a power of 2 or not,
// An integer is power of two if there exists an integer 'x' such that 'n' === 2^x
// isPowerOfTwo(1) - 2^0 // true,
// isPowerOfTwo(2) - 2^1 // true,
// isPowerOfTwo(5) -     // false,
// isPowerOfTwo(32) - 2^5 // true,
// ! Power of Two - Pseudocode
// n = 8
// 8/2 = 4 (remainder 0)
// 4/2 = 2 (remainder 0)
// 2/2 = 1 (remainder 0)
// if remainder is not 0 in any step, "n" is not a power of two;
// if remainder is 0 and "n" comes down to 1 eventually, "n" is a power of two;
//& ==== 11-dars ====
// ! Recursion
// What?
// Recursion is a problem solving technique where the solution depends on
// solutions to smaller instances of the same problem,
// Recursion is when a function calls itself
// why?
// A great technique to simplify your solution
// If you find yourself breaking down your problem into smaller versions of the same proble, recursion is very useful

// ! A few points about recursion
// every recursive solution needs to have a base case - a condition to terminate the recursion.
// Recursion might simplify solving a problem but it does not always translate to a faster solution.
// A recursive solution may be far worse compared to an iterative solution
// Recursion is a topic that is not the most straight forward to understand.
// Do not give up if you struggle with the concept

//& ==== 12-dars ====
//! Recursive Fibonacci sequence
// Problem - Give a number 'n', find the 'n'th elements of the Fibonacci sequence;
// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// The first two numbers in the sequence are 0 and 1;  -> [0,1,1,2,3,5,8,...]
// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8
//! Tips for recursive solution
// Figure out how to break down the problem into smaller versions of the same problem
// Identify the base case for recursion
//! Recursive Fibonacci sequence contd.
// the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones
// If Func represents a function to calculate the Fibonacci number, then Func(n) = Func(n-1) + Fumc(n-2);

// ! Recursive Factorial of a number
// Problem - Give an integer "n", find the factorial of that integer
// The factorial of a non-negative integer "n", denoted n!, is the product of all the positive integers less than or equal to "n"
// factorial of zero is 1.
// factorial(0) - 1
// factorial(4) = 4*3*2*1 - 24
// factorial(5) = 5*4*3*2*1 - 120
