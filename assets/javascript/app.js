// Giphy $API use


var actors = ['Tom Hanks', 'Johnny Depp', 'Tom Cruise', 'Matt Damon', 'Brad Pitt', 'Robert De Niro', 'Harrison Ford', 
				'Leonardo Dicaprio', 'Clint Eastwood', 'Will Smith', 'Morgan Freeman', 'Denzel Washington'];
var $input='';
var btn;
var rm;
$('body').css({'backgroundColor': 'grey' })

$(document).ready(function(){


//generating buttons dynamically- - - -- - - - - -- -- - 
function assign() {

	$('#btn').empty();
	
	// body...
	for (var i = 0; i < actors.length; i++) {
		btn = $('<button class="btn btn-success">');
		btn.text(actors[i]);
		btn.css({'margin': '5px'})
		rm = $('<button class="remove btn-success" style = "margin-left: 20px">&times;</button>');
		btn.append(rm);
		$('#btn').append(btn);
	}
}
assign();

$(document).on("click", ".remove", function() {
    $(this).parent().remove();
});

//user input manipulation -- - - - - - -  - - -- -- -  
$('form').on('submit', function(event){
	event.preventDefault();
	$input = $('#user-input').val();
	$('#user-input').val('');
	actors.push($input);
	assign();

})



//event hundler

})
