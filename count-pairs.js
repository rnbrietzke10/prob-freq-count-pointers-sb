// add whatever parameters you deem necessary
function countPairs(arr, sum) {
  arr.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sumPairs = arr[left] + arr[right];
    if (sumPairs === sum) {
      count++;
      left++;
      right--;
    } else if (sumPairs < sum) {
      left++;
    } else {
      right--;
    }
  }
  return count;
}
