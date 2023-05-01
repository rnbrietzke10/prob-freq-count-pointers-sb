// add whatever parameters you deem necessary
function averagePair(arr, avg) {
  // left pointer
  let left = 0;
  // right pointer
  let right = arr.length - 1;

  while (left < right) {
    let pairAvg = (arr[left] + arr[right]) / 2;
    if (pairAvg === avg) return true;

    if (pairAvg < avg) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}
