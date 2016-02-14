var numberOfBoxes = 16;
var maxBoxes = 100;


$(document).ready(function(){
	displayGrid(numberOfBoxes);
	$('#restart').click(function(){
		reset();		
	});
	$('#red').click(function(){
		colorRed();
	});
	$('#blue').click(function(){
		colorBlue();
	});
	$("#green").click(function(){
		colorGreen();
	});
});

function displayGrid(n) {
	size = 480;
	var boxSize = (size - 2*n)/n;
	var wrap = $("#container").html("");
	for (var i = 0; i < n; i++) {
		for (var j = 0; j< n; j++) {
			wrap.append( $("<div></div>").addClass("firkant").height(boxSize).width(boxSize) );
		}
		wrap.append($("<div></div>").css("clear", "both"));
	}
	etch();
};

function clean(){
	$(".firkant").remove();
	displayGrid(numberOfBoxes);
};

function etch(){
	$(".firkant").mouseenter(function(){
		$(this).addClass("etch");
	});
};

function colorRed(){
	$(".etch").css("background", "red");
}

 

function colorBlue(){
	$(".etch").css("background", "blue");
	
}

function colorGreen(){
	$(".etch").css("background", "green");
}

function reset(){
	var input = prompt("Enter number of squares between 1 and 100");
	if(input > 0 && input <= maxBoxes) {
		displayGrid(input);
	}
	else{
		reset()
	}
	$(this).addClass('clear');
};




