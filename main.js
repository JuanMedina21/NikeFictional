$(document).ready(function(event){


	//when you get on small cleat 
	var smallCleat = $('.thumbnails img');
	smallCleat.on('click', function(){
		//get the image path src
		var smallCleatSrc = $(this).attr('src');
		//replace the large image src with small cleat src
		$('#currentCleat').attr('src', smallCleatSrc);




		})


});