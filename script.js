var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var genBtn = document.querySelector(".gen-btn");

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

let text = css.textContent = body.style.background;
document.getElementById("demo").innerHTML = text;

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";
  
  for ( var i = 0; i < 6; i++ ) {
    hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
  }
  return hexCode1;
  
}

function generate() {
  
  var deg = Math.floor(Math.random() *360);
  
  var gradient = "linear-gradient(to right, " + "#" + createHex() + ", " + "#" + createHex() +")";
  
  body.style.background = gradient;
  
  css.textContent = body.style.background + ";";

  console.log(gradient);
 
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

genBtn.addEventListener("click", generate);


