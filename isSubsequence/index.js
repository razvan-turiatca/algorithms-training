// My solution

function isSubsequence(str1, str2) {
  let i = 0
  let j = 0

  // in order to avoid O(n²) I declared variables i and j separately and started a while loop
  // I will compare the first letter in the first string with the first in the second string. if the letters are the same I will compare the next ones and so on.
  // If the letters are not the same, I will compare the same letter from the first string with the second from the second string.
  // If the value of i gets as high as the length of the string 1, it means that str1 is a subsequence of str2 and I return true, otherwise I return false.
  //
  while (j < str2.length) {
    if (str1[i] != str2[j]) {
      j++
    } else {
      i++
      j++
    }
    if (i === str1.length) {
      return true
    }
  }
  return false
}
