// my solution

function capitalizeFirst(arr) {
  let newArray = []

  function capitalize(input) {
    if (input.length === 0) return
    let temp = input.shift()
    newArray.push(temp[0].toUpperCase().concat(temp.slice(1)))
    capitalize(input)
  }
  capitalize(arr)
  return newArray
}
