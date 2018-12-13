console.log("up and running");
var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "memory_game/images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "memory_game/images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "memory_game/images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "memory_game/images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var createBoard = function(){
  for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img') ;
cardElement.setAttribute('src',"images/back.png");
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
  cardElement.setAttribute('src',"images/back.png");
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
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  var set = this.setAttribute('src',cards[cardId].cardImage);
checkForMatch();
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
}
createBoard();
