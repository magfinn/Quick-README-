// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your github username (Required)",
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "Enter the title of your project (Required)",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a short description of your project. Explain the what, why and how. What was your motivation? Why did you build this project? What problems does it solve? What did you learn? What makes your project stand out?"
    },

    {
        type: "input",
        name: "link",
        message: "Enter link to deployed application. If there is no deployed link, leave blank. Include full link starting with https://"
    },
    {
        type: "confirm",
        name: "screenshotConfirm",
        message: "Would you like to include a screenshot of your project?",
        default: "true",
    },
    {
        type: "input",
        name: "screenshotLink",
        message: "What is the relative path link to the project screenshot? (i.e. ./folder/file)",
        when: ({screenshotConfirm}) => screenshotConfirm
    },
    {
        type: "input",
        name: "install",
        message: "Provide a step-by-step description of how to get your development environment running."
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['Javascript','HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: "input",
        name: "credits",
        message: "Include Github username of a partner (starting with @) if you had one on this project. If not, write 'none'."
    },
    {
        type: "input",
        name: "attribution",
        message: "If you used any third-party assets that require attribution, list the creators with links to their primary web presence. If not, leave blank."
    },
    {
        type: "confirm",
        name: "licenseConfirm",
        message: "Do you have a license for this project?",
        default: "false",
    },

]

const promptUser = (array) => {
    return inquirer.prompt(array);
}

// TODO: Create a function to initialize app
function init() {
    promptUser(questions).then((answers) => {
        console.log(answers);
        // // TODO: Create a function to write README file
        fs.writeFile('readme.md', generateMarkdown(answers), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
}

// Function call to initialize app
init();
