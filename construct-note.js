// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  // create empty map for letter count
  let freqLetters = {};
  let freqMessage = {};

  // Build counter for frequency of letters
  for (let el of letters) {
    freqLetters[el] = freqLetters[el] + 1 || 1;
  }

  // Build counter for frequency of message
  for (let el of msg) {
    freqMessage[el] = freqMessage[el] + 1 || 1;
  }

  for (let el in freqMessage) {
    if (!freqLetters[el]) return false;

    if (freqMessage[el] > freqLetters[el]) return false;
  }

  return true;
}
