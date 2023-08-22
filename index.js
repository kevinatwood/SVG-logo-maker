// TODO: Import Shapes
const inquirer = require("inquirer")
const fs = require("fs")
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const {Circle, Triangle, Square} = require("./lib/shape");
const SVG = require("./lib/svg");
const Text = require("./lib/text");

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
.then((response) => {
    const newText = new Text(response.characters, response.charColors);
    let newShape;

    if (response.shape == "square"){
        newShape = new Square(response.shapeColor)
    } else if (response.shape == "circle"){
        newShape = new Circle(response.shapeColor)
    } else {
        newShape = new Triangle (response.shapeColor)
    }
    const newSVG = new SVG(newShape, newText)
    console.log(newSVG.render())
    fs.writeFile("logo.svg", newSVG.render(), (err) =>
    err ? console.log(err) : console.log('Successfully created SVG!'));

})

// TODO: Make write to file function