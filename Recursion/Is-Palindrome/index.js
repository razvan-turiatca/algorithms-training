// my solution

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  let fhalf = ''
  let shalf = ''
  let stringArr = str.split('')

  function recursing(arr) {
    if (arr.length <= 1) {
      return
    }
    fhalf += arr.shift()
    shalf += arr.pop()
    recursing(arr)
  }

  recursing(stringArr)
  return str.length % 2 === 0 ? false : fhalf === shalf
}

// a better approach that I found after I solved it

function isPalindrome(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}
