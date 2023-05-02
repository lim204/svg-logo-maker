const inquirer = require("inquirer");
const fs = require ("fs");
const {Circle, Square, Triangle} = require("./lib/shapes");
const SVG = require("./lib/svg");


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
        function writeToFile( fileName, data){
            console.log("writing ["+ data +"]to file ["+fileName+"]")
            FileSystem.writeFile (fileName,data, function (error){
                if (err){
                   return console.log(err);
                }
                console.log("congratulations, generate logo svg");
            });
        }

        }
        
}



//calls promptUser Function so inquirer prompts fire off when application is ran 
promptUser();
