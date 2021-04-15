({title,description,installation,usage,license,contribution,test}) => {
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
    }