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
  }
  if (sliderValue === "2") {
    tv.style.backgroundImage = 'url(' + allImages[2] + ')';
    document.getElementById("season").innerHTML = "Asylum";
  }
  if (sliderValue === "3") {
    tv.style.backgroundImage = 'url(' + allImages[3] + ')';
    document.getElementById("season").innerHTML = "Freak Show";
  }
  if (sliderValue === "4") {
    tv.style.backgroundImage = 'url(' + allImages[4] + ')';
    document.getElementById("season").innerHTML = "Roanoke";
  }
  if (sliderValue === "5") {
    tv.style.backgroundImage = 'url(' + allImages[5] + ')';
    document.getElementById("season").innerHTML = "Asylum";
  }
  if (sliderValue === "6") {
    tv.style.backgroundImage = 'url(' + allImages[6] + ')';
    document.getElementById("season").innerHTML = "Roanoke";
  }
}
