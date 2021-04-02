console.log("hi");

//Page 1
function land() {
	document.getElementById("page-1-twister").id = 'page-1-style';
	document.getElementById("spinimage").id = 'hidden';
	document.getElementById("twisterbutton").id = 'hidden';
	document.getElementById("img1").style.display = 'block';
	document.getElementById("page-1-h1").style.display = 'inline';
	document.getElementById("page-1-h2").style.display = 'inline';
	document.getElementById("page-1-h3").style.display = 'inline';
}

//Page 2
var img = document.getElementById("img2");
var moving = false;

img.addEventListener("mousedown", initialClick, false);

function move(e){

  var newX = e.clientX - 10;
  var newY = e.clientY - 10;

  image.style.left = newX + "px";
  image.style.top = newY + "px";


}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

  moving = !moving;
  image = this;

  document.addEventListener("mousemove", move, false);

}

//Page 3
function sleep() {
	document.body.style.backgroundColor = 'black';
	document.getElementById("page-3-title").style.color = 'black';
	document.getElementById("page-3-title").style.color = 'black';
	document.getElementById("page-3-image").style.display = 'none';
	document.getElementById("poppy").style.display = 'none';
	document.getElementById("page-3-next").style.color = 'black';
	document.getElementById("mouse").style.display = 'block';
}

function wake() {
	window.location.reload();
}

//Page 4
function revealWizard() {
  document.getElementById("hidden").style.display = 'block';
}

//Page 5
function melt() {
	document.getElementById("witch").style.display = 'none';
	document.getElementById("melt").style.display = 'block';
}


//Page 6
function revealWizard2() {
  document.getElementById("hidden2").style.display = 'block';
}

//Page 7
function cut1() {
	document.getElementById("branch1").style.display = 'none';
}

function cut2() {
	document.getElementById("branch2").style.display = 'none';
}

function cut3() {
	document.getElementById("branch3").style.display = 'none';
}

//Page 8
function overwall() {
	document.getElementById("wall").style.display = 'none';
}

//Page 9

//Page 10
