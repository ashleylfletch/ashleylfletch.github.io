//Controls
//Slider
function changeColor() {
  let red = document.getElementById('myRange').value;
  let color = 'rgb(' + red + ',139,168)';
  document.body.style.backgroundColor = color;
}

document.getElementById('myRange').addEventListener('input', changeColor;
