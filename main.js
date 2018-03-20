$(function() {
  // Load background image
  $("body").css("background-image","url(./img/background.jpg)");
  $("nav").css("background-image","url(./img/menu.png)");
		$("li.sousitem").hide();
});

/* Navbar */
$("nav.navbar").click(function() {
  $("li.item").slideToggle();
});

$("li.item.item-sousmenu").hover(function() {
  $("li.sousitem").slideToggle();
});

$("body").keyup(function(event) {
	var hovering = null;
	// console.log("event.keyCode=" + event.keyCode);
	if (event.keyCode == 39) {
		// Arrow RIGHT
		$("li.item").show();
	}
	
	if (event.keyCode == 37) {
		// Arrow LEFT
		$("li.item").hide();
	}
	
		if (event.keyCode == 40) {
		// Arrow DOWN
			$("li.item:first-child").hide();
	}
	
		if (event.keyCode == 38) {
		// Arrow UP
	}
});
