var Airtable = require("airtable");
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base(
  "appFhx8BNwmUKTTwE"
);

let allItems = [];

base('Sarah Paulson').select({}).eachPage(function page(collectionItems, fetchNextPage) {
  collectionItems.forEach(function(item) {
    allItems.push(item);
  });


  displayCollection(allItems);
});


function displayCollection(allItems) {
  console.log(allItems);
    let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);

  allItems.forEach(function(item) {
    console.log(item);
      let name = item.fields.items;
    console.log(name);
    let imageUrl = item.fields.images[0].url;
    let itemImage = document.createElement('img');
    itemImage.src = imageUrl;
    itemImage.classList.add(item.fields.season);
    container.appendChild(itemImage);

    if (name === "screenshot") {
      let screenshot = document.createElement('img');
      screenshot.src = imageUrl;
      screenshot.classList.add("screenshot");
      screenshot.appendChild(screenshot);
    }


//Controls
//Sound
function play(){
     var audio = document.getElementById("audio");
     audio.play();}
     
//Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
