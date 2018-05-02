function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var MusiciansInfo = [];
  for (let i = 0; i < musiciansArray.length; i++) {
    MusiciansInfo[i] = Object.assign({}, MusiciansInfo, { [i]: `${musiciansArray[i]} plays ${instrumentsArray[i]}`}); 
  }
  return MusiciansInfo;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(FactsArray) {
  
} 