//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./Develop/utils/generateMarkdown');
const questions = require('./utils/questions.js');

//Return answers to prompts as an array
const promptUser = (array) => {
    return inquirer.prompt(array);
}

// Function to initialize app
function init() {
    promptUser(questions).then((answers) => {
        console.log(answers);
        // Function to write README file
        fs.writeFile('./dist/readme.md', generateMarkdown(answers), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
}

// Function call to initialize app
init();
