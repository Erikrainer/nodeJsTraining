// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseLink;

let licenseBadge;

let licenseSection;

function renderLicenseBadge(data) {
  if(data.license === "MIT"){
    licenseBadge = "![Github License](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }else if(data.license === "Apache"){
    licenseBadge = "![Github License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
  }else if(data.license === "GPL"){
    licenseBadge = "![Github License](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  }else if(data.license === "BSD"){
    licenseBadge = "![Github License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause"
  }else{
    licenseBadge = "";
  }     
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data.license === "MIT"){
    licenseLink = "https://opensource.org/licenses/MIT"
  }else if(data.license === "Apache"){
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
  }else if(data.license === "GPL"){
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  }else if(data.license === "BSD"){
    licenseLink = "https://opensource.org/licenses/BSD-2-Clause"
  }else{
    licenseBadge = "";
  }     
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  renderLicenseBadge(data);
  renderLicenseLink(data);
  licenseSection =   `This project is licensed under the [${data.license}](${licenseLink}).

  ${licenseBadge}`
  if(data.license === "MIT"){
    licenseSection = "This project has no license.";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data);
  return `# ${data.title}
  ${licenseBadge}


## Description 📝

${data.description}

## Table of Contents 🗒

* [Installations](#installations-💻)

* [Usage](#usage-🏆)

* [Contributors](#contributors-😃)

* [Test](#tests-🧪)

* [Questions](#questions)

* [License](#license-📛)

## Installations  💻

Deployed link: ${data.link} 

To install dependencies, run these commands:

${data.installation}

## Usage 🏆

${data.usage}

## License 📛 

  Copyright @ ${data.license}. All rights reserved.

  Licensed under the ${data.license} license.

  ${licenseLink}

## Contributors 😃

${data.credits}

## Tests 🧪

To run tests, run these commands:


${data.test}


## Questions

For additional questions, contact me at the email provided below. 

- GitHub: [${data.github}](https://github.com/${data.github}/)
- Email:  ${data.email}

`;
}










































module.exports = generateMarkdown;
