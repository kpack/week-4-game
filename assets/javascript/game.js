


// var targetscore = "0"
var targetscore = math.floor((Math.random() * 120) + 19);
var red = math.floor((Math.random() * 12) + 1);
var blue = math.floor((Math.random() * 12) + 1);
var green = math.floor((Math.random() * 12) + 1);
var yellow = math.floor((Math.random() * 12) + 1);
var yourscore = 0
var wincount = 0
var losscount = 0

// reset yourscore
// random target score

$('#targetscore').text(targetscore)
$("blue").click();((


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