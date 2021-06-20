const print = console.log

let counter = 0

function inception() {
  console.log(counter)
  if (counter > 3) {
    return console.log('done !')
  }
  counter++
  return inception()
}

// inception()

// 1. identify the base case
// 2. identify the recursice case
// 3. get closer and closer and return

//  ? recrsion-factorial

function findFactorialIterative(number) {
  let answer = 1
  if (number === 2) {
    answer = 2
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i
  }
  return answer
}

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2
  }
  return number * findFactorialRecursive(number - 1)
}

// print(findFactorialRecursive(5))
//  given a number n return the index value of the fibonacci sequence, where the sequence is : 
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

function fibonacciIterative(n) {
  let arr = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1])
  }
  return arr[n]
} // O(n)
// print(fibonacciIterative(1))
// print(fibonacciIterative(2))
// print(fibonacciIterative(3))
// print(fibonacciIterative(4))
// print(fibonacciIterative(5))
// print(fibonacciIterative(6))

function fibonacciRecursive(n) {
  if (n < 2) {
    return n
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
} // O(2^n)
print(fibonacciRecursive(1))
print(fibonacciRecursive(2))
print(fibonacciRecursive(3))
print(fibonacciRecursive(4))
print(fibonacciRecursive(5))
print(fibonacciRecursive(6))

// every time you are using a tree or converting 
// something into a tree, consider recursion
// [1] divided into a number of subproblems that are smaller instances of the same problem
// [2] each instance of the subproblem is identical in nature
// [3] the solutions of each subproblem can be combined to solve the problem at hand
// divde and conquer using recursion