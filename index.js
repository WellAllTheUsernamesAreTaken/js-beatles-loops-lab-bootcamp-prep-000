function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var MusiciansInfo = [];
  for (let i = 0; i < musiciansArray.length(); i++) {
    MusiciansInfo[i] = Object.assign({}, MusiciansInfo, { [i]: `${musiciansArray[i]} plays ${instrumentsArray[i]}`}); 
  }
  return MusiciansInfo;
}