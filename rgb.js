var colors = ["rgb(255, 0, 0)",
			  "rgb(0, 255, 255)",
			  "rgb(0, 255, 0)",
			  "rgb(255, 255, 0)",
			  "rgb(255, 0, 0)",
			  "rgb(0, 0, 255)"
];

var cSpan = document.querySelector("#cSpan");
var cSpanContainer = document.querySelector(".cSpanContainer");
var squares = document.querySelectorAll(".square");
var messageSpan = document.querySelector(".messageContainer");
var pickedColor = colors[3];

cSpan.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
	//Add initial colors.
	squares[i].style.backgroundColor = colors[i];

	//add event listener, per square.
	squares[i].addEventListener("click", function(){

		//grab color of clicked element.
		var clickedColor = this.style.backgroundColor;

		//compare clicked color to picked color.
		if(clickedColor === pickedColor){
			messageSpan.textContent = "Correct!";
			changeColors(clickedColor);
		}else{
			this.style.backgroundColor = "#232323";
			messageSpan.textContent = "Try again!";
		}
	});
}

function changeColors(color){
	//loop through all elements
	for(var i=0; i < squares.length; i++){
		//change colors of all elements to correctly selected color
		squares[i].style.backgroundColor = color;
		cSpanContainer.style.backgroundColor = color;
		}
	}

	
	
