// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let freqNum1 = {};
  let freqNum2 = {};

  // create counter for numbers in num 1
  for (let num of strNum1) {
    freqNum1[num] = freqNum1[num] + 1 || 1;
  }
  // create counter for numbers in num 2
  for (let num of strNum2) {
    freqNum2[num] = freqNum2[num] + 1 || 1;
  }

  for (let key in freqNum1) {
    if (freqNum1[key] !== freqNum2[key]) return false;
  }
  return true;
}
