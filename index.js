function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

function johnLennonFacts(facts) {
  var exclaim = []
  
  let i = 0
  while (i < facts.length) {
    exclaim.push(`${facts[i]}!!!`);
    i++
  } 
  return exclaim
}

function iLoveTheBeatles(n) {
  var love = []
  
  let i = 0
  do () {
    love.push(`I love the Beatles!`);
    i++
  } while (i < 15) {
    return love 
  }
  }
}