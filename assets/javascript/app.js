// Giphy $API use


var actors = ['Tom Hanks', 'Johnny Depp', 'Tom Cruise', 'Matt Damon', 'Brad Pitt', 'Robert De Niro', 'Harrison Ford', 
				'Leonardo Dicaprio', 'Clint Eastwood', 'Will Smith', 'Morgan Freeman', 'Denzel Washington'];
var $input='';
var btn;
var rm;
var result;
var word;
$('body').css({'backgroundColor': 'grey' })


	



$(document).ready(function(){

	$(document).on("click", ".btn", function(){

		 word = $(this).eq(0).text()
		 word = word.substring(0, word.length-1)
			
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + word + "&api_key=dc6zaTOxFJmzC&limit=10";

    //     // Creates AJAX call for the specific movie button being clicked
         $.ajax({
    	      url: queryURL,
    	      method: "GET"
    	   }).done(function(response) {

           
            result = response.data;
           for (var i = 0; i < result.length; i++) {
           		
           	    var $gif = $('<div class="remove '+word+'" style="float: left; margin: 8px; border: 4px solid grey">');

           		
           	 	 
           	 	var rating = result[i].rating;

           	 	var p = $('<p>').text('Rating: '+rating);

           	 	var img = $('<img>').attr('src', result[i].images.fixed_height.url);
           	 	img.attr('class', 'gif').attr('state', 'animate');
           	 	//give the same ID to button and div
           	 	$gif.prepend(p);
           	 	$gif.prepend(img);
           	 	$('#display').prepend($gif);
           	 	$('#display').css({'clear': 'left'})

           }
           

          
         });
    })


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
    //word = word.substring(0, word.length-1)
    var id = $(this).parent().text()

    id = id.substring(0, id.length-1)
    console.log($('#display').find($('.'+id)).children());
    
    $('div.' +id).val('');
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
