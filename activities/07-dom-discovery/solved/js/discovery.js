var outputBox = document.getElementById("discoverer");

// 1. Create a closure function whose outer function takes in an element we want to dump some information
function setDimensionScanner(target) {
  // 2. Return a function that takes an event, and modifies the target element's text based on the dimensions of the event.target
  return function (event) {
    var width = event.target.clientWidth;
    var height = event.target.clientHeight;

    // We're formatting our inputs for ease of use but you can do this however you'd like
    target.innerText = formatText(width, height);
  };
}
// 3. Use our closure function to generate an event handler for checking the dimensions
var dimensionScan = setDimensionScanner(outputBox);

// 4. Attach the event handler to the window's `mouseover` event.
window.addEventListener("mouseover", dimensionScan);

// Our highly optional function to format the height and width
function formatText(width, height) {
  return JSON.stringify({ width, height }, null, 4);
}
