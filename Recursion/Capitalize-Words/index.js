//my solution

function capitalizeWords(arr, newArr = []) {
  if (arr.length === 0) return newArr
  newArr.push(arr[0].toUpperCase())
  return capitalizeWords(arr.slice(1), newArr)
}

// a different approach but I find this more difficult

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()]
  }
  let res = capitalizeWords(array.slice(0, -1))
  res.push(array.slice(array.length - 1)[0].toUpperCase())
  return res
}
