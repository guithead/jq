$(document).ready(function() {

	//image mover

	$(document).keydown(function(e){

		//premenne+podmienky smerov aby nevysiel z obrazovky

		var bj = $('#bj'),
			left = bj.position().left >= 100,
			right = bj.position().left <= $('body').width() - (bj.width()+100),
			top = bj.position().top >= 100,
			bottom =  bj.position().top <= $('.moving-img').height() - (bj.width()+100)

	    switch (e.which) {

	    case 37:    //left arrow
	    	if (left) {
		        bj.finish().animate({
		            left: "-=50"
		        });
	        }
	        break;

	    case 38:    //up arrow
	    	if(top) {
		        bj.finish().animate({
		            top: "-=50"
		        });
	        }
	        break;

	    case 39:    //right arrow
	    	if (right) {
		        bj.finish().animate({
		            left: "+=50"
		        });
	        }
	        break;

	    case 40:    //bottom arrow
	    	if (bottom) {
		        bj.finish().animate({
		            top: "+=50"
		        });
	        }
	        break;
	    }
});

	//progress bar
	var	btn = $('#btn'),
		bar = $('.bar')

	btn.on('click', function() {
		bar.stop().animate({width: '100%'}, 2000, function(){
			bar.animate({width: '0%'}, 2000)
		});

	});



});