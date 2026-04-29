//list of all the variables in the program

let firstCard = 10
let secondCard = 2
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        console.log("")
        message = "Wooho you've got BJ"
        hasBlackjack = true
    } else {
        message = "Sorry you're out"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    let thirdCard = 5
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}