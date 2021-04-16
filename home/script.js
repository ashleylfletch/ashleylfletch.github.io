console.log("hello, Ashley, your Javascript is working if you can see this message.")

function placeBubbles() {
  // get all of the html elements that have the class bubble that ive written
  let bubbles = document.querySelectorAll(".bubble");
  // i know there are 6 bubbles, i want to position EACH of those bubbles in a different PLACE on the page
  bubbles.forEach(function(bubble) { //do something to each bubble
    let randomHorizontal = Math.floor(Math.random() * window.innerWidth); // give random whole number between 0 and page width
    let randomVertical = Math.floor(Math.random() * window.innerHeight * 2.5); // give random whole number between 0 and page height
    bubble.style.top = randomVertical + "px";
    bubble.style.left = randomHorizontal + "px";
  })
}

document.addEventListener("keydown", addBubble);

function addBubble(event) {
  if (event.key === "b") {
    let newBubble = document.createElement("div");
    newBubble.classList.add("bubble");
    document.body.appendChild(newBubble);
    placeBubbles();
  } else {
    console.log("user pressed other key");
  }
}


// call functions
placeBubbles();
