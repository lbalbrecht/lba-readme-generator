// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== null) {
        fs.appendFile(`This project is licensed under the ${license} license.`)
    }
    else {
        fs.appendFile(`This project is unlicensed`)
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
