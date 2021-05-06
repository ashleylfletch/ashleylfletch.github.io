var hand = document.getElementById("hand");
var wind = document.getElementById("wind");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");

one.onclick = function() {
  hand.style.transform = "rotate(30deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  document.getElementById("king").style.display = "block";
}

two.onclick = function() {
  hand.style.transform = "rotate(60deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  document.getElementById("queen").style.display = "block";
}

three.onclick = function() {
  hand.style.transform = "rotate(90deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  document.getElementById("princess").style.display = "block";
}

four.onclick = function() {
  hand.style.transform = "rotate(120deg)";
  document.body.style.backgroundColor = "#c9ebff";
  document.getElementById("bunny").style.display = "block";
}

five.onclick = function() {
  hand.style.transform = "rotate(150deg)";
  document.body.style.backgroundColor = "#c9ebff";
  document.getElementById("mushroom1").style.display = "block";
  document.getElementById("mushroom2").style.display = "block";
  document.getElementById("mushroom3").style.display = "block";
  document.getElementById("mushroom4").style.display = "block";
  document.getElementById("mushroom5").style.display = "block";
}

six.onclick = function() {
  hand.style.transform = "rotate(180deg)";
  document.body.style.backgroundColor = "#c9ebff";
  document.getElementById("cloud1").style.display = "block";
  document.getElementById("cloud2").style.display = "block";
  document.getElementById("cloud3").style.display = "block";
}

seven.onclick = function() {
  hand.style.transform = "rotate(210deg)";
  document.body.style.backgroundColor = "#7475b6";
  document.getElementById("egg").style.display = "block";
}

eight.onclick = function() {
  hand.style.transform = "rotate(240deg)";
  document.body.style.backgroundColor = "#7475b6";
  document.getElementById("snail").style.display = "block";
}

nine.onclick = function() {
  hand.style.transform = "rotate(270deg)";
  document.body.style.backgroundColor = "#7475b6";
  document.getElementById("witch").style.display = "block";
}

ten.onclick = function() {
  hand.style.transform = "rotate(300deg)";
  document.body.style.backgroundColor = "#5148b2";
  document.getElementById("star1").style.display = "block";
  document.getElementById("star2").style.display = "block";
  document.getElementById("star3").style.display = "block";
  document.getElementById("star4").style.display = "block";
  document.getElementById("star5").style.display = "block";
  document.getElementById("star6").style.display = "block";
}

eleven.onclick = function() {
  hand.style.transform = "rotate(330deg)";
  document.body.style.backgroundColor = "#5148b2";
  document.getElementById("left-eye-closed").style.display = "block";
  document.getElementById("right-eye-closed").style.display = "block";
  document.getElementById("zzz").style.display = "block";
  document.getElementById("left-eye").style.display = "none";
  document.getElementById("right-eye").style.display = "none";
  document.getElementById("king").style.display = "none";
  document.getElementById("queen").style.display = "none";
  document.getElementById("princess").style.display = "none";
  document.getElementById("egg").style.display = "none";
  document.getElementById("bunny").style.display = "none";
  document.getElementById("mushroom1").style.display = "none";
  document.getElementById("mushroom2").style.display = "none";
  document.getElementById("mushroom3").style.display = "none";
  document.getElementById("mushroom4").style.display = "none";
  document.getElementById("mushroom5").style.display = "none";
  document.getElementById("cloud1").style.display = "none";
  document.getElementById("cloud2").style.display = "none";
  document.getElementById("cloud3").style.display = "none";
  document.getElementById("snail").style.display = "none";
  document.getElementById("witch").style.display = "none";
  document.getElementById("star1").style.display = "none";
  document.getElementById("star2").style.display = "none";
  document.getElementById("star3").style.display = "none";
  document.getElementById("star4").style.display = "none";
  document.getElementById("star5").style.display = "none";
  document.getElementById("star6").style.display = "none";
}

twelve.onclick = function() {
  hand.style.transform = "rotate(0deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  document.getElementById("king").style.display = "none";
  document.getElementById("queen").style.display = "none";
  document.getElementById("princess").style.display = "none";
  document.getElementById("egg").style.display = "none";
  document.getElementById("bunny").style.display = "none";
  document.getElementById("mushroom1").style.display = "none";
  document.getElementById("mushroom2").style.display = "none";
  document.getElementById("mushroom3").style.display = "none";
  document.getElementById("mushroom4").style.display = "none";
  document.getElementById("mushroom5").style.display = "none";
  document.getElementById("cloud1").style.display = "none";
  document.getElementById("cloud2").style.display = "none";
  document.getElementById("cloud3").style.display = "none";
  document.getElementById("snail").style.display = "none";
  document.getElementById("witch").style.display = "none";
  document.getElementById("star1").style.display = "none";
  document.getElementById("star2").style.display = "none";
  document.getElementById("star3").style.display = "none";
  document.getElementById("star4").style.display = "none";
  document.getElementById("star5").style.display = "none";
  document.getElementById("star6").style.display = "none";
  document.getElementById("left-eye-closed").style.display = "none";
  document.getElementById("right-eye-closed").style.display = "none";
  document.getElementById("left-eye").style.display = "block";
  document.getElementById("right-eye").style.display = "block";
  document.getElementById("zzz").style.display = "none";
}

function showAbout () {
    document.getElementById("about").style.display = "block";
    document.getElementById("castle-inside").style.display = "block";
    document.getElementById("grass-container").style.display = "none";
    document.getElementById("hand").style.display = "none";
    document.getElementById("door-inside1").style.display = "block";
    document.getElementById("door-inside2").style.display = "block";
    document.getElementById("door-outside1").style.display = "none";
    document.getElementById("door-outside2").style.display = "none";
    document.getElementById("king-inside").style.display = "block";
    document.getElementById("queen-inside").style.display = "block";
    document.getElementById("princess-inside").style.display = "block";
    document.getElementById("bunny-inside").style.display = "block";
    document.getElementById("mushroom-inside").style.display = "block";
    document.getElementById("cloud-inside").style.display = "block";
    document.getElementById("egg-inside").style.display = "block";
    document.getElementById("snail-inside").style.display = "block";
    document.getElementById("witch-inside").style.display = "block";
    document.getElementById("star-inside").style.display = "block";
    document.getElementById("left-eye").style.display = "none";
    document.getElementById("right-eye").style.display = "none";
    document.getElementById("king").style.display = "none";
    document.getElementById("queen").style.display = "none";
    document.getElementById("princess").style.display = "none";
    document.getElementById("egg").style.display = "none";
    document.getElementById("bunny").style.display = "none";
    document.getElementById("mushroom1").style.display = "none";
    document.getElementById("mushroom2").style.display = "none";
    document.getElementById("mushroom3").style.display = "none";
    document.getElementById("mushroom4").style.display = "none";
    document.getElementById("mushroom5").style.display = "none";
    document.getElementById("cloud1").style.display = "none";
    document.getElementById("cloud2").style.display = "none";
    document.getElementById("cloud3").style.display = "none";
    document.getElementById("snail").style.display = "none";
    document.getElementById("witch").style.display = "none";
    document.getElementById("star1").style.display = "none";
    document.getElementById("star2").style.display = "none";
    document.getElementById("star3").style.display = "none";
    document.getElementById("star4").style.display = "none";
    document.getElementById("star5").style.display = "none";
    document.getElementById("star6").style.display = "none";
    document.getElementById("left-eye-closed").style.display = "none";
    document.getElementById("right-eye-closed").style.display = "none";
    document.getElementById("left-eye").style.display = "block";
    document.getElementById("right-eye").style.display = "block";
    document.getElementById("wind-show").style.display = "none";
    document.getElementById("wind-hide").style.display = "block";
    document.getElementById("zzz").style.display = "none";
}

function hideAbout () {
    document.getElementById("about").style.display = "none";
    document.getElementById("castle-inside").style.display = "none";
    document.getElementById("grass-container").style.display = "block";
    document.getElementById("hand").style.display = "block";
    document.getElementById("door-inside1").style.display = "none";
    document.getElementById("door-inside2").style.display = "none";
    document.getElementById("door-outside1").style.display = "block";
    document.getElementById("door-outside2").style.display = "block";
    document.getElementById("king-inside").style.display = "none";
    document.getElementById("queen-inside").style.display = "none";
    document.getElementById("princess-inside").style.display = "none";
    document.getElementById("bunny-inside").style.display = "none";
    document.getElementById("mushroom-inside").style.display = "none";
    document.getElementById("cloud-inside").style.display = "none";
    document.getElementById("egg-inside").style.display = "none";
    document.getElementById("snail-inside").style.display = "none";
    document.getElementById("witch-inside").style.display = "none";
    document.getElementById("star-inside").style.display = "none";
    document.getElementById("left-eye-closed").style.display = "none";
    document.getElementById("right-eye-closed").style.display = "none";
    document.getElementById("left-eye").style.display = "block";
    document.getElementById("right-eye").style.display = "block";
    document.getElementById("wind-show").style.display = "block";
    document.getElementById("wind-hide").style.display = "none";
}
