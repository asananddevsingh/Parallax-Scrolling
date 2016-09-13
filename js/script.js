(function () {

	var slideCount, maxslideCount; 

	slideCount = parseInt(0, 10);
	maxslideCount = document.querySelectorAll('section[data-slide-num]').length;

	function scrollSlideToTop(slideNumber){
		ele = slideNumber ? "#slide".concat(slideNumber) : "#header";
		$('html, body').animate({ scrollTop: $(ele).offset().top - 10}, 500);
	}

	document.addEventListener("keydown", function (event) {
				
		/*var url = window.location.origin.concat(window.location.pathname);*/
		
		/* For Up Key Press */
	    if (event.keyCode === 38) {
	    	if(slideCount > 1){
	    		slideCount--;
	    		scrollSlideToTop(slideCount);
	    	}
	    	else{	    		
	    		scrollSlideToTop(0);
	    		slideCount = 0;
	    	}
	    }

		/* For Down Key Press */
	    if (event.keyCode === 40) { 
	    	if(slideCount < maxslideCount){
	    		slideCount++;
	    		scrollSlideToTop(slideCount);
	    	}
	    	else{
	    		// DO NOTHING: Let it behave normal scroll.	    		
	    	}
	    }
	});

	

}());