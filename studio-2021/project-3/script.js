var Airtable = require("airtable"); //make a new variable called "Airtable" and set it equal to the loaded airtable module
var base = new Airtable({ apiKey: "key13Xr8YZ7doV9Tg" }).base( //make a new variable and set it equal to the new "Airtable" variable with the API key: key13Xr8YZ7doV9Tg
  "appFhx8BNwmUKTTwE" //and the base ID
);

let allItems = []; //make a new variable called "allItems" and set it equal to an array

base('sarah-paulson').select({ //in airatable, in the column title "sarah-paulson," select all the contents
  view: 'Grid' //order the collection contents based on the "Grid" view in airtable
}).eachPage(function page(collectionItems, fetchNextPage) { //in each page of the airtable grid, call a function titled "page" with the paremeters "collectionItems" and "fetchNextPage"
  collectionItems.forEach(function(item) { //for each item in airtable, do this
    allItems.push(item); //add all items from airtable into the allItems array
  });
  fetchNextPage(); //do this for all items, even past 100

}, function done(err) { //call a function titled "done" with the parameter of error
if (err) { console.error(err); return; } //if there is an error, stop the function
 displayCollection(allItems); //once all items are loaded in from airtable call displayCollection() function
});

let allImages = []; //make a new variable called "allImages" and set it equal to an array
let allSeasons = []; //make a new variable called "allSeasons" and set it equal to an array
let allEpisodes = []; //make a new variable called "allEpisodes" and set it equal to an array
let allTimestamps = []; //make a new variable called "allTimestamps" and set it equal to an array
function displayCollection(allItems) { //call a function titled "displayCollection" within the parameters of the variable allItems
    let container = document.createElement("div"); //make a new variable called "container" and set it equal to a new div
  container.classList.add("container"); //add the class of "container" to the container variable/div
  document.body.appendChild(container); //move all the HTML body into the new container div


  allItems.forEach(function(item) { //for each of the following variables within the allItems container, call a function with an item statement
    allImages.push(item.fields.screenshot[0].url); //add all the screenshots from airtable into the allImages array
    allSeasons.push(item.fields.season); //add all the seasons from airtable into the allSeasons array
    allEpisodes.push(item.fields.episode); //add all the episodes from airtable into the allEpisodes array
    allTimestamps.push(item.fields.timestamp); //add all the timestamps from airtable into the allTimestamps array
  })
}

//Controls
//Slider
var slider = document.getElementById("myRange"); //make a new variable called "slider" and set it equal to the HTML element with the id of "myRange"

slider.oninput = function() { //when the slider gets moved by the user do this
  let sliderValue = this.value; //make a new variable called "sliderValue" and set it equal to the number that the slider is moved to based on the scale set up in HTML
  let tv = document.getElementById("tv"); //make a new variable called "tv" and set it equal to the HTML element with the id of "tv"
  tv.style.backgroundImage = 'url(' + allImages[sliderValue] + ')'; //change the image that appears within the tv div to an image from airtable that corresponds to the slider value, so that sliderValue of 1 would equal image 1 in airtable
  document.getElementById("season").innerHTML = allSeasons[sliderValue]; //change the span contents within the id of "season" in the HTML to one of the allSeasons array data (from airtable) that equals the current sliderValue
  document.getElementById("episode").innerHTML = ', Episode ' + allEpisodes[sliderValue]; //change the span contents within the id of "episode" in the HTML to one of the allEpisodes array data (from airtable) that equals the current sliderValue
  document.getElementById("timestamp-number").innerHTML = allTimestamps[sliderValue]; //change the span contents within the id of "timestamp-number" in the HTML to one of the allTimestamps array data (from airtable) that equals the current sliderValue
}

let number = 0; //make a new variable called "number" and set it equal to 0
let playing = false; //make a new variable called "playing" and set it equal to false
var speedValue = 1000; //make a new variable called "speedValue" and set it equal to 1000
function autoPlay() { //call a function titled "autoPlay" and do this
  let tv = document.getElementById("tv"); //make a new variable called "tv" and set it equal to the HTML element with the id of "tv"
  if (number < allImages.length + 1 && playing === true) { //if the number of contents within the allImages array is creater than 1 and the playing variable is set equal to true then do this
    setTimeout(() => { //call a setTimeout function to delay the display of each image based on a number of milliseconds
      number = number + 1; //change the value of number to equal
      tv.style.backgroundImage = 'url(' + allImages[number] + ')'; //change the image that appears within the tv div to an image from airtable that corresponds to the number value
      document.getElementById("season").innerHTML = allSeasons[number]; //change the span contents within the id of "season" in the HTML to one of the allSeasons array data (from airtable) that equals the current number value
      document.getElementById("episode").innerHTML = ', Episode ' + allEpisodes[number]; //change the span contents within the id of "episode" in the HTML to one of the allEpisodes array data (from airtable) that equals the current number value
      document.getElementById("timestamp-number").innerHTML = allTimestamps[number]; //change the span contents within the id of "timestamp-number" in the HTML to one of the allTimestamps array data (from airtable) that equals the current number value
      autoPlay(); //call the function autoPlay()
    }, speedValue); //call speedValue, the function statement

//Playback Speed
    var slow = document.getElementById('slow'); //make a new variable called "slow" and set it equal to the HTML element with the id of "slow"
    var normal = document.getElementById('normal'); //make a new variable called "normal" and set it equal to the HTML element with the id of "normal"
    var fast = document.getElementById('fast'); //make a new variable called "fast" and set it equal to the HTML element with the id of "fast"

    slow.onclick = function() { //when you click on the slow button do this
      speedValue = 2000; //change the speed value to 2000 (to make it go slower)
    }

    normal.onclick = function() { //when you click on the normal button do this
      speedValue = 1000; //change the speed value to 1000 (to make it go normal speed)
    }

    fast.onclick = function() { //when you click on the fast button do this
      speedValue = 500; //change the speed value to 500 (to make it go faster)
    }
  }
}

//Play/Pause Buttons
var playbutton = document.getElementById('play'); //make a new variable called "playbutton" that is equal to the HTML element with the id of "play"
var pausebutton = document.getElementById('pause'); //make a new variable called "pausebutton" that is equal to the HTML element with the id of "pause"
playbutton.onclick = function() { //when you click on the playbutton do this
  playbutton.style.display = "none"; //hide the playbutton
  pausebutton.style.display = "block"; //swap the playbutton for the pause button
  playing = true; //change the variable "playing"'s value to true (instead of false)
  autoPlay(); //call the function autoPlay()
}
pausebutton.onclick = function() { //when you click on the pausebutton do this
  playbutton.style.display = "block"; //swap the pausebutton for the play button
  pausebutton.style.display = "none"; //hide the pausebutton
  playing = false; //change the variable "playing"'s value to false (instead of true)
}

//Popups
var aboutpopup = document.getElementById('aboutpopup'); //make a new variable called "aboutpopop" that is equal to the HTML element with the id of "aboutpopup"
var speedpopup = document.getElementById('speedpopup'); //make a new variable called "speedpopop" that is equal to the HTML element with the id of "speedpopup"
var aboutbutton = document.getElementById('about'); //make a new variable called "aboutbutton" that is equal to the HTML element with the id of "about"
var speedbutton = document.getElementById('speed'); //make a new variable called "speedbutton" that is equal to the HTML element with the id of "speed"
var span = document.getElementsByClassName('close')[0]; //make a new variable called "span" that is equal to the first HTML element with the id of "close"
var span2 = document.getElementsByClassName('close')[1]; //make a new variable called "span2" that is equal to the second HTML element with the id of "close"

aboutbutton.onclick = function() { //when you click on the aboutbutton do this
  aboutpopup.style.display = "block"; //show the aboutpopup
}

speedbutton.onclick = function() { //when you click on the aboutbutton do this
  speedpopup.style.display = "block"; //show the speedpopup
}

span.onclick = function(){ //when you click on the (about) close button do this
  aboutpopup.style.display = "none"; //close the aboutpopup
}

span2.onclick = function(){ //when you click on the (speed) close button do this
  speedpopup.style.display = "none"; //close the speedpopup
}

window.onclick = function(event) { //when you click anywhere on the screen do this
  if (event.target == aboutpopup || event.target == speedpopup){ //if the area you click is not a popup
    aboutpopup.style.display = "none"; //close the aboutpopup
    speedpopup.style.display = "none"; //close the speedpopup
  }
}
