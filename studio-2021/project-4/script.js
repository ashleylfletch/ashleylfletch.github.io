var hand = document.getElementById("hand");
var one = document.getElementById("one");
  var click_one = true;
var two = document.getElementById("two");
  var click_two = true;
var three = document.getElementById("three");
  var click_three = true;
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
  var click_eleven = true;
var twelve = document.getElementById("twelve");

one.onclick = function() {
  hand.style.transform = "rotate(30deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  if (click_one) {
      document.getElementById("king").style.display = "block";
      click_one = false;
    } else {
      document.getElementById("king").style.display = "none";
      click_one = true;
    }
}

two.onclick = function() {
  hand.style.transform = "rotate(60deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  if (click_two) {
      document.getElementById("queen").style.display = "block";
      click_two = false;
    } else {
      document.getElementById("queen").style.display = "none";
      click_two = true;
    }
}

three.onclick = function() {
  hand.style.transform = "rotate(90deg)";
  document.body.style.backgroundColor = "#e1f8ff";
  if (click_three) {
      document.getElementById("egg").style.display = "block";
      click_three = false;
    } else {
      document.getElementById("egg").style.display = "none";
      click_three = true;
    }
}

four.onclick = function() {
  hand.style.transform = "rotate(120deg)";
  document.body.style.backgroundColor = "#c9ebff";
}

five.onclick = function() {
  hand.style.transform = "rotate(150deg)";
  document.body.style.backgroundColor = "#c9ebff";
}

six.onclick = function() {
  hand.style.transform = "rotate(180deg)";
  document.body.style.backgroundColor = "#c9ebff";
}

seven.onclick = function() {
  hand.style.transform = "rotate(210deg)";
  document.body.style.backgroundColor = "#abb5ff";
}

eight.onclick = function() {
  hand.style.transform = "rotate(240deg)";
  document.body.style.backgroundColor = "#abb5ff";
}

nine.onclick = function() {
  hand.style.transform = "rotate(270deg)";
  document.body.style.backgroundColor = "#7475b6";
}

ten.onclick = function() {
  hand.style.transform = "rotate(300deg)";
  document.body.style.backgroundColor = "#7475b6";
}

eleven.onclick = function() {
  hand.style.transform = "rotate(330deg)";
  document.body.style.backgroundColor = "#5148b2";
  if (click_eleven) {
      document.getElementById("witch").style.display = "block";
      click_eleven = false;
    } else {
      document.getElementById("witch").style.display = "none";
      click_eleven = true;
    }
}

twelve.onclick = function() {
  hand.style.transform = "rotate(0deg)";
  document.body.style.backgroundColor = "#5148b2";
  document.getElementById("king").style.display = "none";
  document.getElementById("queen").style.display = "none";
  document.getElementById("egg").style.display = "none";
  document.getElementById("witch").style.display = "none";
}

// let wind = document.getElementById("wind");
// let number = 0;
// let playing = false;
// let speedValue = 1000;
//
// function autoPlay () {
//   if (number < 12 && playing === true) {
//     setTimeout(() => {
//       number = number + 1;
//   if (number = 1) {
//     hand.style.transform = "rotate(30deg)";
//     document.body.style.backgroundColor = "#e1f8ff";
//     document.getElementById("king").style.display = "block";
//   }
//   if (number = 2) {
//     hand.style.transform = "rotate(60deg)";
//     document.body.style.backgroundColor = "#e1f8ff";
//     document.getElementById("queen").style.display = "block";
//   }
//   if (number = 3) {
//     hand.style.transform = "rotate(90deg)";
//     document.body.style.backgroundColor = "#e1f8ff";
//     document.getElementById("egg").style.display = "block";
//   }
// }
//
// wind.onclick = function {
//   playing = true;
//   autoPlay();
// }
