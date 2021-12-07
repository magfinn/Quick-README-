//An array of questions for user input
const questions = [
    {
        type: "input",
        name: "fullName",
        message: "Enter your full Name(Required)",
        validate: fullNameInput => {
            if(fullNameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
                return false;
            }
        }
    },
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
        message: "Enter an email address you can be contacted if there are questions (Required)",
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
        message: "Enter the title of your project (Required).",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    // {
    //     type: "input",
    //     name: "repoTitle",
    //     message: "Enter the title of your project repository (Required).",
    //     validate: repoTitleInput => {
    //         if(repoTitleInput) {
    //             return true;
    //         } else {
    //             console.log("Please enter your repo's title!");
    //             return false;
    //         }
    //     }
    // },
    {
        type: "input",
        name: "descriptionWhat",
        message: "(Description 1/2)Enter a short description of your project. What does it do? (Required)",
        validate: descriptionWhatInput => {
            if(descriptionWhatInput) {
                return true;
            } else {
                console.log('You must enter at least one of the description questions.')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "descriptionWhy",
        message: "(Description 2/2) Why did you create this project? What was your motivation? What problems does it solve? What makes it stand out?",
    },
    {
        type: "input",
        name: "link",
        message: "Enter link to deployed application. (Required) (Include full link starting with https://...)",
        validate: linkInput => {
            if(linkInput) {
                return true;
            } else {
                console.log('You must include a link to your project. If it is not deployed, include a link to the repo.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "requirements",
        message: "Enter any requirements to install and run this project. (example: 'Make sure that you have Node.js installed. Once installed, you can use the built in package manager npm to install inquirer. <br><br> ```npm install inquirer```')"
    },
    {
        type: "input",
        name: "usage",
        message: "Installation/ Getting Started: Provide a step-by-step code to get your development environment running. Include installation code (example:1. Clone this repository into your local file: <br>```[clone link]``` <br> 2. Run the following command at the root of your project and answer the prompts: <br> ```node index.js``` <br> 3. Done! Your new readme.md is located in your 'dist' file folder."
    },
  
    {
        type: "input",
        name: "credits",
        message: "Credits: Include Github username of a partner (starting with @) if you had one on this project. If not, leave blank."
    },
    {
        type: "input",
        name: "attribution",
        message: "Attribution: If you used any third-party assets that require attribution, list the creators with links to their primary web presence. If not, leave blank."
    },
    {
        type: "input",
        name: "contribute",
        message: "Contribute: Describe if and how you would welcome collaboration. (example: 'Contributions, issues, and feature requests are welcome! Check out this guide from [Contributor Covenant](https://www.contributor-covenant.org/) for more information.)"
    },
    {
        type: "input",
        name: "tests",
        message: "Tests: What tests will you include? If no tests, include a note about why it is not included."
    },
    {
        type: "list",
        name: "license",
        message: "Choose your license. For more information on which license to choose, visit (https://choosealicense.com/).",
        choices: ['MIT', 'AGPL', 'Apache', 'MPL'],
    }
]

module.exports = questions;
