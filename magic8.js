
// "It is certain"
// "It is decidedly so"
// "Without a doubt"
// "Yes definitely"
// "You may rely on it"
// "As I see it, yes"
// "Most likely"
// "Outlook good"
// "Yes"
// "Signs point to yes"
// "Reply hazy try again"
// "Ask again later"
// "Better not tell you now"
// "Cannot predict now"
// "Concentrate and ask again"
// "Don't count on it"
// "My reply is no"
// "My sources say no"
// "Outlook not so good"
// "Very doubtful"


$('#button').click(function(){
	computerChoice = Math.random()
		game(computerChoice)	 		
	});




function game(computerChoice){
		

			if (computerChoice  <= 0.33){
		wisdom = `Yes`;
	 } else if (computerChoice <= 0.66){
		wisdom = `Maybe`;
	 } else {
		wisdom = `No`;
	};




}



 	$('#button').click(function(){
		$('.answer').html(`${wisdom}`);
	});



// num = Math.random();
// answer = "";

// $('submit').click(function(){
// 		if num >= 0.5 {
// 			$('answer').html("yes!");
// 		} else {
// 			$('answer').html("no!");
// 		};
// });



// ANIMATIONS

// $("#button").click(function() {
//   $('.triangle').toggleClass('triangle:active');
// });
$("#button").click(function() {
  // not gonna work
  $("#tri").removeClass(".triangle").addClass(".triangle-active");
});