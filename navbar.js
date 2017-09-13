(function() {

	var style = function(el) {
		el.style.setProperty("transition", "all .5s ease-out");
		el.style.setProperty("background", "transparent");
		el.style.setProperty("box-shadow", "none", "important");
		el.style.setProperty("transform", "scale(1.1)", "important");
		el.style.setProperty("transform-origin", "50% -10%", "important");
	}

	var unstyle = function(el) {
		el.style.removeProperty("background");
		el.style.setProperty("background", "#373a3c", "!important");

		el.style.removeProperty("box-shadow");
		el.style.removeProperty("transform");
		el.style.removeProperty("transform-origin");
	}

	var s = "<style id='navbar-cover'>.navbar.fixed-top {transform-origin:50% -10%;transform:scale(1.1) !important;box-shadow: none;background: transparent !important;}</style>";
	document.write(s);

	document.addEventListener("DOMContentLoaded", function(event) {
    	style(document.querySelector(".navbar.fixed-top"));
    	document.getElementById("navbar-cover").remove();
  	});

	window.addEventListener("scroll", function() {

		var scroll = $(window).scrollTop();
		console.log("scroll", scroll)


		if (scroll > 15)
			unstyle(document.querySelector(".navbar.fixed-top"));
		else
			style(document.querySelector(".navbar.fixed-top"));

	})
})();
