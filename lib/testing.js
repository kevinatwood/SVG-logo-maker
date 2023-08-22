const {Circle, Triangle, Square} = require("./shape");
const SVG = require("./svg");
const Text = require("./text");

const selectedShape = "triangle"

const newText = new Text("ABC", "yellow");
let newShape;

if(selectedShape == "circle") {
    newShape = new Circle("blue");
} else {
    newShape = new Triangle("blue");
}

const newSVG = new SVG(newShape, newText);

console.log(newSVG.render())