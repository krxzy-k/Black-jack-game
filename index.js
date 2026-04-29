//list of all the variables in the program

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let isAlive = true
let hasBlackjack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

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
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
}