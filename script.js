// declaring objects
let player = {
    name : "Mdot",
    chips : 500
} 

let cards = [];
let sum;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#card-el");

// using object
let playerEl = document.querySelector("#player-el");
// rendering out object
playerEl.textContent = player.name + ": $" + player.chips;

// function random card that returns the number between 1 and 13

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if(randomCard === 1){
        return 11;
    }else if (randomCard > 10){
        return 10;
    }else{
        return randomCard;
    }
}

// call the start game function

function startgame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard+secondCard;
    rendergame();
}

// call reneder game function

function rendergame(){
   cardsEl.textContent = "Cards: " 
    // using for loop to render out all the cards
   for (let i = 0; i < cards.length; i++){
    cardsEl.textContent+=cards[i] + " ";
   }
    sumEl.textContent = "Sum: " + sum; 
   // logic for If statement
    if (sum<=20) {
        message = "Do you want to draw a new card?";
    }else if (sum===21){
        message = "You've got a blackjack";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
}

// call the new card function

function newcard(){

    if (isAlive === true && hasBlackJack === false){
    let newCard = getRandomCard();
    sum+=newCard;
    cards.push(newCard);
    rendergame();
}

}



/*
1. Arrays
2. objects
3. booleans (state of the game)
4. if else statement
5. comparison operators
6. logical operator
7. for loops
8. Math object
9. return statement
*/