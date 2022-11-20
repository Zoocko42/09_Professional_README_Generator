// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// import generateMarkdown from './utils/generateMarkdown';

//Licenses

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Please provide a brief description of this project.",
    "How should this project be installed?",
    "Please provide instructions for using this project.",
    "Please list any collaborators, third-party websites, or tutorials who aided with this project.",
    "Please choose a license for this project."
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]
        },        
        {
            type: "input",
            name: "installation",
            message: questions[2]
        },        
        {
            type: "input",
            name: "userInstructions",
            message: questions[3]
        },        
        {
            type: "input",
            name: "collaborators",
            message: questions[4]
        },
        {
            type: "list",
            message: questions[5],
            name: "license",
            choices: ["MIT", "Apache 2.0", "Creative Commons 0", "Creative Commons Attribution 4.0 International", "Eclipse Public"]
        }
    ])
    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
    })
};

// TODO: Create a function to initialize app
function init() {
    writeToFile("testFile")
}

// Function call to initialize app
init();
