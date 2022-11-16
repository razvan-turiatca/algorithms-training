// Solution

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null

  let maxSum = 0
  let temp = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  temp = maxSum

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i]

    maxSum = Math.max(temp, maxSum)
  }

  return maxSum
}
