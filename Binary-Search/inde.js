function binarySearch(arr, val) {
  let i = 0
  let j = arr.length - 1
  let avg = Math.floor((i + j) / 2)

  while (arr[avg] !== val && i <= j) {
    val < arr[avg] ? (j = avg - 1) : (i = avg + 1)
    avg = Math.floor((i + j) / 2)
  }
  return arr[avg] == val ? avg : -1
}
