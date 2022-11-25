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
