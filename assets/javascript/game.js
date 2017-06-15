


// set variables
var targetScore = Math.floor((Math.random() * 120) + 19);
var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);
var yourScore = 0;
var winCount = 0;
var lossCount = 0;


// insert target
$("#targetScore").text(targetScore)


// set up winner and loser functions
function winner(){
	alert("You won!");
	winCount++; 
  	$("#wins").text("Wins: " + winCount);
  	reset();
}

function loser(){
alert ("You lose!");
  lossCount++;
  $("#losses").text("Losses: " + lossCount);
  reset()
}

// crystal click functions

 $('#blue').on ('click', function(){
    yourScore = yourScore + blue;
    console.log("New userTotal= " + yourScore);
    $('#yourscore').text(yourScore); 
        if (yourScore == targetScore){
          winner();
        }
        else if ( yourScore > targetScore){
          loser();
        } 
  })  


 $('#red').on ('click', function(){
    yourScore = yourScore + red;
    console.log("New userTotal= " + yourScore);
    $('#yourscore').text(yourScore); 
        if (yourScore == targetScore){
          winner();
        }
        else if ( yourScore > targetScore){
          loser();
        } 
   })  

 $('#yellow').on ('click', function(){
    yourScore = yourScore + yellow;
    console.log("New userTotal= " + yourScore);
    $('#yourscore').text(yourScore); 
        if (yourScore == targetScore){
          winner();
        }
        else if ( yourScore > targetScore){
          loser();
        } 
  })  


 $('#green').on ('click', function(){
    yourScore = yourScore + green;
    console.log("New userTotal= " + yourScore);
    $('#yourscore').text(yourScore); 
        if (yourScore == targetScore){
          winner();
        }
        else if ( yourScore > targetScore){
          loser();
        } 
  })  



//reset game

function reset(){
	targetScore = Math.floor((Math.random() * 120) + 19);
	$("#targetScore").text(targetScore);
	red = Math.floor((Math.random() * 12) + 1);
	blue = Math.floor((Math.random() * 12) + 1);
	green = Math.floor((Math.random() * 12) + 1);
	yellow = Math.floor((Math.random() * 12) + 1);
	yourScore = 0;
}


