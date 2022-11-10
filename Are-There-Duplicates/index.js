function areThereDuplicates(...args) {
  // I declare 2 variable first and second as pointers
  // [1,         2,        3,        4]
  // first    second
  let first = 0
  let second = 1

  // I will start a while loop. Inside the loop I will use the two pointers as indexes for the values in the array.
  // I will increase the second pointer's value, until the second pointer reaches the end of the array.
  // When this happens I will start increasing the first pointer.
  // If at any moment the values represented by the pointers are equal the function will return true.
  // If no equal values are found the function will return false.

  while (first < second) {
    if (first === second) {
      return false
    }
    if (args[first] === args[second]) {
      return true
    }
    if (second === args.length - 1) {
      first++
    } else {
      second < args.length - 1 && second++
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
