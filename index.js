function theBeatlesPlay(musicians, instruments) {
  var theFirstAnswer = []
  for (let i = 0; i < 4; i++) {
    theFirstAnswer.push(`${musicians[i]} plays ${instruments[i]}`)
  } return theFirstAnswer
}


function johnLennonFacts(facts) {
  var theSecondAnswer = []
  let i = 0
  while (i < facts.length) {
    theSecondAnswer.push(`${facts[i]}!!!`)
    i++
  } return theSecondAnswer
}


function iLoveTheBeatles(number) {
  var theThirdAnswer = []
<<<<<<< HEAD
  let i = number
  do {theThirdAnswer.push("I love the Beatles!")
  i++
} while (i < 15);
  return theThirdAnswer
}
=======
  do {theThirdAnswer.push("I love the Beatles!")
} while (i < 15);
  return theThirdAnswer
}


>>>>>>> b7cff6193ab0bcef7126587099b22310bd354a66
