// my solution

function flatten(arr, newArr = []) {
  if (arr.length === 0) return newArr
  if (Array.isArray(arr[0])) {
    return flatten(arr[0].concat(arr.slice(1)), newArr)
  } else {
    newArr.push(arr[0])
    return flatten(arr.slice(1), newArr)
  }
}
