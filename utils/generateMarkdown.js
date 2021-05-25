const fs = require("fs");

function renderLicenseBadge(license) {
    if (license !== "No license") {
        return `![Github License](https://img.shields.io/badge/License-${license}-important)`
    }
}

function renderLicenseLink(license) {
    if (license === "No license") {
        return (`This project is unlicensed`)
        
    }
    else {
        return (`This project is licensed under ${license}`)
    }
}

// function renderLicenseSection(license) {

// }

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  * [Installation] (#installation)
  
  * [Usage] (#usage)
  
  * [License] (#license)
  
  * [Contributing] (#contributing)
  
  * [Tests] (#tests)
  
  * [Questions] (#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  * ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
${renderLicenseLink(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Testing
  ${data.test}
  
  ## Questions
  [View Author's Github profile](https://github.com/${data.github})
  Or
  Contact the author via email at ${data.email}
  `;
}

module.exports = generateMarkdown;
