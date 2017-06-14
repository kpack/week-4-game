


// set variables
var targetScore = math.floor((Math.random() * 120) + 19);
var red = math.floor((Math.random() * 12) + 1);
var blue = math.floor((Math.random() * 12) + 1);
var green = math.floor((Math.random() * 12) + 1);
var yellow = math.floor((Math.random() * 12) + 1);
var yourScore = 0;
var winCount = 0;
var lossCount = 0;


// insert target
$('#targetscore').text(targetScore)


// set up winner and loser functions
function winner(){
	alert("You won!");
	winCount++; 
  	$('#wins').text(winCount);
  	reset();
}

function loser(){
alert ("You lose!");
  lossCount++;
  $('#losses').text(lossCount);
  reset()
}

//reset game

function reset(){
	targetScore = math.floor((Math.random() * 120) + 19);
	$('#targetscore').text(targetScore);
	red = math.floor((Math.random() * 12) + 1);
	blue = math.floor((Math.random() * 12) + 1);
	green = math.floor((Math.random() * 12) + 1);
	yellow = math.floor((Math.random() * 12) + 1);
	yourScore = 0;
}

// crystal click functions

 $('#blue').on ('click', function(){
    yourScore = yourScore + blue;
    console.log("New userTotal= " + yourScore);
    $('#yourscore').text(yourScore); 
        if (yourScore == targetScore){
          winner();
        }
        else if ( userTotal > Random){
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
        else if ( userTotal > Random){
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
        else if ( userTotal > Random){
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
        else if ( userTotal > Random){
          loser();
        } 
  })  






random crystal for each color between 1-12
onclick each crystal + value to yourscore
if yourscore > alert you lost
	add 1 to loss count
	reset your score to zero
	random target score
	random crystal scores 1-12

if your score = random score, alert you win
	add 1 to win
	reset your score to zero
	random target score
	random crystal scores 1-12