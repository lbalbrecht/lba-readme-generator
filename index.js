// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message:'Please enter the title of your project:',
        name: 'title'
    },
    {
        type: 'input',
        message:'Please enter a project description:',
        name: 'description'
    },
    {
        type: 'input',
        message:'Please enter any installation requirements:',
        name: 'installation'
    },
    {
        type: 'input',
        message:'Please enter usage information:',
        name: 'usage'
    },
    {
        type: 'input',
        message:'Please enter the required license (if none, click "enter"):',
        name: 'license'
    },
    {
        type: 'input',
        message:'Please enter the contribution guidelines:',
        name: 'contribution'
    },
    {
        type: 'input',
        message:'Please enter the test instructions:',
        name: 'test'
    },
])

// TODO: Create a function to write README file
.then((response) => {

    const writeReadme = ({title,description,installation,usage,license,contribution,test}) => {
        `# ${title}

        ## Description
        ${description}

        ## Table of Contents

        * [Installation] (#installation)

        * [Usage] (#usage)

        * [License] (#license)

        * [Contributing] (#contributing)

        * [Tests] (#tests)

        * [Questions] (#questions)
        
        ## Installation

        To install necessary dependencies, run the following command:

        ${installation}

        ## Usage
        ${usage}

        ## License
        ${licenseText()}

        ## Contributing
        ${contribution}

        ## Testing
        ${test}

        ## Questions
        `
        function licenseText() {
            if (license !== null) {
                fs.appendFile(`This project is licensed under the ${license} license.`)
            }
            else {
                fs.appendFile(`This project is unlicensed`)
            }
        }
    }
    fs.writeFile('./generated-readmes/README.md', response, writeReadme, (err) =>
        err ? console.error(error) : console.log("Generating README"))
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

