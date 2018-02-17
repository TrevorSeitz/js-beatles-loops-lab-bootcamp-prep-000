function theBeatlesPlay(bandMembers, instuments) {
  var arr = [];

  for (var i = 0; i < bandMembers.length; i++) {
    arr.push('${bandMembers[i]} plays ${instruments[i]}')
  }
  return arr;
}

function johnLennonFacts(facts) {
  var num = facts.length,
      arr = [];
  while (num > 0){
    arr.push(facts.concat("!!!"));
    num--;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do{
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
return arr;
}



// `string text ${expression} string text`
