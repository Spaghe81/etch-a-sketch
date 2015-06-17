$(document).ready(function() {
	var size = 20;
	var sideLength = $(".container").height() / size;	
	for (i = 0; i < size; i++) {
		$(".container").append('<div class="line"></div>');
	}
	for (j = 0; j < size; j++) {
		$(".line").append('<div class="square"></div>');
	}
	$(".square").hover(function() {
		$(this).css("background-color","#e4e4e4");
	});
	$(".square").height(sideLength);
	$(".square").width(sideLength);
	
	$("#clear").click(function() {
		$(".square").css("background-color","#f0f0f0");
	});
	$("#resize").click(function() {
		size = prompt("How many squares per side? (Choose a number between 2 and 100)");
		if (size <= 1 || size >= 100) {
			alert("Invalid choice");
		} else {
			$(".container").empty();
			for (i = 0; i < size; i++) {
				$(".container").append('<div class="line"></div>');
			}
			for (j = 0; j < size; j++) {
				$(".line").append('<div class="square"></div>');
			}			
			sideLength = $(".container").height() / size;
			$(".square").height(sideLength);
			$(".square").width(sideLength);
			$(".square").hover(function() {
				$(this).css("background-color","#e4e4e4");
			});
		}
	});
});
