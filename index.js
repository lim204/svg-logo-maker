const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
const svg = require("./lib/svg");

//   function writeToFile(fileName, answers){
//     //    let svgString = "";
//     //    svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
//     //    svgString += "<g>";
//     //    svgString += `${answers.shape}`;

//       fs.writeFile(fileName,svgString,(err)=> {
//        err? console.log(err) : console.log ("generated logo.svg");
//       });
//  };



//array of questions for user input
function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Please enter text for logo. (Text should be up to be 3 characters)",
            },
            {
                type: "input",
                name: "textColor",
                message: "Please enter a text color (Enter keyword or a hexadecimal number):",
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
            },
            {
                type: "list",
                name: "shape",
                message: "Please choose which shape you would like?",
                choices: ["Circle", "Square", "Triangle"],
            },
        ])
        .then (({text,textColor,shapeColor, shape})=>{
            let shapes;
            switch (shapeColor){
                case "circle":
                    shape = new Circle;
                    break;
                case "square":
                    shape = new Square;
                    break;
                case "triangle":
                    shape = new Triangle;
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new svg();
            svg.setText(text,textColor);
            svg.setShape(shape);
            return writeFile("logo.svg",svg.render());
        })
        .then (()=>{
            console.log("Generated logo.svg");
        })
}



//calls promptUser Function so inquirer prompts fire off when application is ran 
promptUser();