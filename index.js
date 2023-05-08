const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
const SVG = require("./lib/svg");

   function writeToFile(fileName, answers){
       fs.writeFileSync("./temp.png",answers.render(),(err)=> {
        err? console.log(err) : console.log ("generated logo.svg");
       });
  };

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
                name: "textcolor",
                message: "Please enter a text color (Enter keyword or a hexadecimal number):",
            },
            {

                type: "input",
                name: "textbackgroundColor",
                message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
            },
            {
                type: "list",
                name: "shape",
                message: "Please choose which shape you would like?",
                choices: ["Circle", "Square", "Triangle"],
            },
        ])
           .then((answers) => {
             let shapeLogo;
             switch(answers.shape){
                case "Circle": 
                 shapeLogo = new Circle()
                 break;

                 case "Square": 
                 shapeLogo = new Square()
                 break;
                 
                 case "Triangle": 
                 shapeLogo = new Triangle()
                 break;
             } 
             shapeLogo.setColor(answers.textbackgroundColor)
             const myLogo = new SVG()
             myLogo.setShape(shapeLogo)
             myLogo.setText(answers.text,answers.textcolor)
              if (answers.text.length > 3) {
                   console.log("Please no more than 3 characters");
                   promptUser();
               } else {
                  // let filecontent = myLogo.render()
                   writeToFile("logo.svg", myLogo);
               }
          });
}



//calls promptUser Function so inquirer prompts fire off when application is ran 
promptUser();
