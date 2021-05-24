const inquirer = require("inquirer");
const fs = require("fs");
const {questions} = require('./utils/inquirerQuestions');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer.prompt(questions).then((response) => {
    const writeReadme = generateMarkdown(response);
    fs.writeFile('./generated-readmes/README.md', writeReadme, (err) =>
    err ? console.error(error) : console.log("Generating README"));    
})

    // // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();


