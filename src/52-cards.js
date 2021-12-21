const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const suits = ['♣️','♦️','❤️','♠️']

const generateDeck = () => {
  const deck = []
  suits.forEach(suit => {
    deck.push(values.map(val => `${suit} ${val}`))
  })
  
  return deck.flat()
}

const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() > .5 ? 1 : -1 )
}

const deck = generateDeck()
const shuffledDeck = shuffleDeck(deck)
