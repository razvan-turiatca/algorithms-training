function sameFrequency(num1, num2) {
  // I decided to create an object where I will store each digit from the first argument, by looping through the digits.
  // If the digits is already there I will increase it's value by one.
  let obj = {}

  for (let char of num1.toString()) {
    obj[char] = (obj[char] || 0) + 1
  }

  //Now I will loop through the second number's digits and if the current digit is already in the object, I will substract one from the value.
  // If the digit is not there it means the digits in the 2nd number are not the same as in the first number and therefore I will return false.

  for (let char of num2.toString()) {
    if (obj[char]) {
      obj[char] -= 1
    } else {
      return false
    }
  }

  // This time I will loop through the object to check if there are values left there,
  // and if there are it means there were digits in the first number that weren't in the second and I will return false.
  for (let key in obj) {
    if (obj[key] > 0) {
      return false
    }
  }

  // if it reaches this point it means the digits in both numbers have the same frequesncy and will return true
  return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
