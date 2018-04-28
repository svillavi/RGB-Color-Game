var colors = genRandomColors(6);
var cSpan = document.querySelector("#cSpan");
var cSpanContainer = document.querySelector(".cSpanContainer");
var squares = document.querySelectorAll(".square");
var messageSpan = document.querySelector(".messageContainer");
var pickedColor = pickColor();

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

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genRandomColors(num){
	//make array
	var arr = [];
	
	//add num random colors array
	for(var i=0; i < num; i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//Note: Initial bug, when comparing "clicked" vs "picked", it wasn't comaring correctly. Checked CSS for set div color, it was set initially during mockup of the app, to give the divs identifying colors; Default color"purple" and added spaces accordingly. 
//Note: to verify that the two values(clicked/picked) are the same, run a console.log(clickedColor, pickedColor) and compare and contrast the two.
function randomColor(){   
	//pick a "red" 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" 0 -255
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


for(var i=0; i < squares.length; i++){

	//add event listener, per square - mouseover.
	squares[i].addEventListener("mouseover", function(){
		this.classList.add("hoveron");
	});
}

for(var i=0; i < squares.length; i++){
	//add event listener, per square - mouseoff:
	squares[i].addEventListener("mouseout", function(){
		//using the classList.remove enables to "squares" to return to their original position.
		this.classList.remove("hoveron");
	});
}	