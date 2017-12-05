// Giphy $API use


var animals = ['dog', 'cat', 'rabbit', 'hamster', 'bird', 'frog', 'roaster', 
				'sheep', 'turtle', 'godlfish', 'horse'];
var input = 0;
var btn=0;


//generating buttons dynamically
function assign() {
	// body...
	for (var i = 0; i < animals.length; i++) {
	btn = $('<button>');
	btn.text(animals[i]);
	$('#btn').append(btn);
	}
}
assign();

//event hundler
//user input manipulation
