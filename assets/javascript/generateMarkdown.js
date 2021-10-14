// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#  ${data.title}
  ##  ${data.description}
  ### Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  #### License
  ${data.license}
  #### Contributors
  ${data.contributors}
  #### Test Instructions
  ${data.tests}
  ##### Questions
  If you have any questions please feel free to contact me at @ ${data.questions} .
`;
}

module.exports = generateMarkdown;
