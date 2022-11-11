function countUniqueValues(arr) {
  // I am going to start by declaring the two pointers. These two pointers will be used to compare the array values represented by the pointers as indices.

  let left = 0
  let right = 1

  // I will loop over the array and check if the values represented by left and right are equal or not

  while (right < arr.length) {
    // I check if the element at position left is equal to the element at position right
    // if it isn't I increase the value of left with 1, I will change the value of the element at position left with the value at position right and I will increase right with 1.
    if (arr[left] != arr[right]) {
      left++
      arr[left] = arr[right]
      right++
      // if the values are the same I will only increase right with one and start comparing again
    } else {
      right++
    }
  }
  // will determine the number of unique values by adding 1 to the value of left and returning it or returning 0 if that was an empty array.
  return arr.length > 0 ? left + 1 : 0
}
