$(document).ready(function() {

	$("ul#work li").hover(function() { //On hover...

		var thumbOver = $(this).find("img").attr("src"); //Get image url and assign it to 'thumbOver'

		//Set a background image(thumbOver) on the <a> tag - Set position to bottom
		$(this).find("a.thumb").css({'background' : 'url(' + thumbOver + ') no-repeat center bottom'});

		//Animate the image to 0 opacity (fade it out)
		$(this).find("span").stop().fadeTo('normal', 0 , function() {
			$(this).hide() //Hide the image after fade
		});
	} , function() { //on hover out...
		//Fade the image to full opacity 
		$(this).find("span").stop().fadeTo('normal', 1).show();
	});

});