function the BeatlesPlay(bandMembers, instuments) {
  var arr = [];

  for (var i = 0; i < bandMembers.length; i++) {
    arr.push('${bandMembers[i]} plays ${instruments[i]}')
  }
  return arr;
}



// `string text ${expression} string text`