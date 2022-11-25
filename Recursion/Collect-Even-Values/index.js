const collectEvenValues = (arr) => {
  let newArr = []

  const helper = (helperArr) => {
    if (helperArr.length === 0) return

    if (helperArr[0] % 2 == 0) {
      newArr.push(helperArr[0])
    }
    helper(helperArr.slice(1))
  }

  helper(arr)

  return newArr
}

// a different approach

const collectEvenValues2 = (arr) => {
  let newArr = []

  if (arr.length === 0) return

  if (arr[0] % 2 == 0) {
    newArr.push(arr[0])
  }

  newArr = newArr.concat(collectEvenValues2(arr.slice(1)))

  return newArr
}
