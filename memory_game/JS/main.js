console.log("up and running");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var checkForMatch = function(){
  if(cardsInPlay.length===2){
    if(cardsInPlay[0]===cardsInPlay[1]){
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again");
    }
  }
}
var flipCard = function(cardId) {
  /*var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  var cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  console.log("User flipped " + cardOne);
  console.log("User flipped " + cardTwo); */
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
checkForMatch();
}
flipCard(0);
flipCard(2);
