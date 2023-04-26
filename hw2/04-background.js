const selector = document.querySelector("select");
const button = document.querySelector("button");
var interval = 0;

function handleButtonPress() {
  let state = document.getElementById("button").innerHTML;
  if (state === "Start") {
    document.getElementById("button").innerHTML = "Stop";
    interval = setInterval(
      changeBackground,
      document.getElementById("selector").value * 1000
    );
  } else {
    document.getElementById("button").innerHTML = "Start";
    clearInterval(interval);
  }
}

// used this as a resource: https://www.youtube.com/watch?v=MTO-yspx4HU
function changeBackground() {
  console.log("changing");
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = 0.8;
  let rgba = `rgba(${r}, ${g}, ${b}, ${a})`;
  document.querySelector("body").style.background = rgba;
}

button.addEventListener("click", handleButtonPress);
