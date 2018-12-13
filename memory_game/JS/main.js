console.log("up and running");
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/queen-of-hearts.png?raw=true"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/queen-of-diamonds.png?raw=true"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/king-of-hearts.png?raw=true"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/king-of-diamonds.png?raw=true"
}
];
var cardsInPlay = [];
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img') ;
cardElement.setAttribute('src',"https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/back.png?raw=true");
cardElement.setAttribute('data-id',i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);
}
}
var num = 0;
var reset = function(){
 cardsInPlay=[];
 for (var i = 0; i < cards.length; i++) {
   var cardElement = document.getElementsByTagName('img')[i];
  cardElement.setAttribute('src',"https://github.com/madaawadh/wdi-fundamentals-memorygame/blob/master/memory_game/images/back.png?raw=true");
 }
}
var Reset = document.getElementById("b");
Reset.addEventListener("click", reset);
var checkForMatch = function(){
  if(cardsInPlay.length===2){
    if(cardsInPlay[0]===cardsInPlay[1]){
      alert("You found a match!");
      num++;
      var score = document.getElementById("score");
      score.innerHTML = num;
    }
    else {
      alert("Sorry, try again");
    }
  }
}
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  this.removeEventListener();
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  var set = this.setAttribute('src',cards[cardId].cardImage);
checkForMatch();
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
}
createBoard();
