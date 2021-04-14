var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base(
  "appFhx8BNwmUKTTwE"
);

let allItems = [];

base('sarah-paulson').select({
  view: 'Grid'
}).eachPage(function page(collectionItems, fetchNextPage) {
  collectionItems.forEach(function(item) {
    allItems.push(item);
  });

  fetchNextPage();

  displayCollection(allItems);
});

let allImages = [];
let allSeasons = [];
let allEpisodes = [];
let allTimestamps = [];
function displayCollection(allItems) {
    let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);


  allItems.forEach(function(item) {
    allImages.push(item.fields.screenshot[0].url);
    allSeasons.push(item.fields.season);
    allEpisodes.push(item.fields.episode);
    allTimestamps.push(item.fields.timestamp);
  })
}

//Controls
//Slider
var slider = document.getElementById("myRange");

slider.oninput = function() {
  let sliderValue = this.value;
  let tv = document.getElementById("tv");
  tv.style.backgroundImage = 'url(' + allImages[sliderValue] + ')';
  document.getElementById("season").innerHTML = allSeasons[sliderValue];
  document.getElementById("episode").innerHTML = ', Episode ' + allEpisodes[sliderValue];
  document.getElementById("timestamp-number").innerHTML = allTimestamps[sliderValue];
}

function autoPlay() {
  for (var i=0; i<allImages.length; i++) {
    let currentValue = allImages[i];
    console.log("this is working");
    let tv = document.getElementById("tv");
    tv.style.backgroundImage = 'url(' + allImages[currentValue] + ')';
    document.getElementById("season").innerHTML = allSeasons[currentValue];
    document.getElementById("episode").innerHTML = ', Episode ' + allEpisodes[currentValue];
    document.getElementById("timestamp-number").innerHTML = allTimestamps[currentValue];
  }
}

//Play/Pause Buttons
var playbutton = document.getElementById('play');
var pausebutton = document.getElementById('pause');

playbutton.onclick = function() {
  playbutton.style.display = "none";
  pausebutton.style.display = "block";
  autoPlay();
}

pausebutton.onclick = function() {
  playbutton.style.display = "block";
  pausebutton.style.display = "none";
}

//About Button
var aboutpopup = document.getElementById('aboutpopup');
var speedpopup = document.getElementById('speedpopup');
var aboutbutton = document.getElementById('about');
var speedbutton = document.getElementById('speed');
var span = document.getElementsByClassName('close')[0];
var span2 = document.getElementsByClassName('close')[1];

aboutbutton.onclick = function() {
  aboutpopup.style.display = "block";
}

speedbutton.onclick = function() {
  speedpopup.style.display = "block";
}

span.onclick = function(){
  aboutpopup.style.display = "none";
}

span2.onclick = function(){
  speedpopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == aboutpopup || event.target == speedpopup){
    aboutpopup.style.display = "none";
    speedpopup.style.display = "none";
  }
}
