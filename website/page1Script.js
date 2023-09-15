// TO DO LIST:
// -Come up with website name
// -Make website compatible with different kinds of displays
// -Finish roadmap to website
// -Add content to website
// -Organize code better

let button = document.getElementById("button");
let backButton = document.getElementById("backButton");

document.getElementById("button").addEventListener("mouseover", function () {
  button.style.backgroundColor = "green";
  button.style.color = "white";
  button.style.animation = "animation 0.25s forwards";
});

document.getElementById("button").addEventListener("mouseout", function () {
  button.style.backgroundColor = "#15171A";
  button.style.color = "white";
  button.style.animation = "animation-reverse 0.25s forwards";
});
