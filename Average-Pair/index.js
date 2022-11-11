function averagePair(arr, num) {
  if (arr.length === 0) return false

  let i = 0
  let j = arr.length - 1

  while (i < j) {
    let avg = (arr[i] + arr[j]) / 2
    if (avg === num) {
      return true
    } else if (avg < num) {
      i++
    } else {
      j--
    }
  }
  return false
}

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false
