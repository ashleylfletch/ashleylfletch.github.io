console.log('this is working');
var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base(
  "appFhx8BNwmUKTTwE"
);

let allItems = [];

base('sarah-paulson').select({}).eachPage(function page(collectionItems, fetchNextPage) {
  collectionItems.forEach(function(item) {
    allItems.push(item);
  });

  displayCollection(allItems);
});

let allImages = [];
function displayCollection(allItems) {
    let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  allItems.forEach(function(item) {
      let season = item.fields.season;
    allImages.push(item.fields.screenshot[0].url);
    // let imageUrl = item.fields.images[0].url;
    // let itemImage = document.createElement('img');
    // itemImage.src = imageUrl;
    // itemImage.classList.add(item.fields.season);
    // container.appendChild(itemImage);

    // if (season === "screenshot") {
    //   let screenshot = document.createElement('img');
    //   screenshot.src = imageUrl;
    //   screenshot.classList.add("screenshot");
    //   screenshot.appendChild(screenshot);
    // }
  })
}
//
//
//Controls
//Sound
function play() {
 var audio = document.getElementById("audio");
 audio.play();
 audio.currentTime = 5;
}

// //Slider
var slider = document.getElementById("myRange");

slider.oninput = function() {
  console.log(this.value);

let sliderValue = this.value;
  let tv = document.getElementById("tv");
  if (sliderValue === "1") {
    tv.style.backgroundImage = 'url(' + allImages[1] + ')';
    document.getElementById("season").innerHTML = "Cult";
    document.getElementById("episode").innerHTML = "1";
    document.getElementById("timestamp-number").innerHTML = "00:01";
  }
  if (sliderValue === "2") {
    tv.style.backgroundImage = 'url(' + allImages[2] + ')';
    document.getElementById("season").innerHTML = "Asylum";
    document.getElementById("episode").innerHTML = "2";
    document.getElementById("timestamp-number").innerHTML = "00:02";
  }
  if (sliderValue === "3") {
    tv.style.backgroundImage = 'url(' + allImages[3] + ')';
    document.getElementById("season").innerHTML = "Freak Show";
    document.getElementById("episode").innerHTML = "3";
    document.getElementById("timestamp-number").innerHTML = "00:03";
  }
}

//About Button
var popup = document.getElementById('aboutpopup');
var aboutbutton = document.getElementById('about');
var span = document.getElementsByClassName('close')[0];

aboutbutton.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function(){
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup){
    popup.style.display = "none";
  }
}
