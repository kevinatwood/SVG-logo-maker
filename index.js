// TODO: Import Shapes
const inquirer = require("inquirer")
const fs = require("fs")
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const {Circle, Triangle, Square} = require("./lib/shape");
const SVG = require("./lib/svg");
const {Text, TriangleText} = require("./lib/text");

// Todo: make prompts
inquirer .prompt([
    {
        type: "maxlength-input",
        name: "characters",
        message: "Enter up to 3 characters for your logo",
        maxLength: 3
    },
    {
        type:"input",
        name: "charColors",
        message: "Enter a color keyword or the color's hexadecimal number"
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape from the options below",
        choices: ['square', 'circle', 'triangle'],
    }, 
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword or the color's hexadecimal number"
    }
])
// TODO: Make write to file function
.then((response) => {
    let newText;
    let newShape;

    if (response.shape == "square"){
        newShape = new Square(response.shapeColor)
        newText = new Text(response.characters, response.charColors);
    } else if (response.shape == "circle"){
        newShape = new Circle(response.shapeColor)
        newText = new Text(response.characters, response.charColors);
    } else {
        newShape = new Triangle (response.shapeColor)
        newText = new TriangleText(response.characters, response.charColors);
    }
    const newSVG = new SVG(newShape, newText)
    console.log(newSVG.render())
    fs.writeFile("logo.svg", newSVG.render(), (err) =>
    err ? console.log(err) : console.log('Successfully created SVG!'));

})

