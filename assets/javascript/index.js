// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown1 = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  inquirer

  .prompt([{
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'In great detail, explain how you install your project.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please, explain how to use your project.',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Please choose your license.',
      choices: ['None',
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense'
      ],
      name: 'license',
    },
    {
      type: 'input',
      message: 'List any and all contributors.',
      name: 'contributors',
    },
    {
      type: 'input',
      message: 'Please, step-by-step, explain how to test instructions.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Please, enter a form of contact, so anyone can reach you with any questions for your project.',
      name: 'questions',
    }
  ])
  .then((data) => {
    console.log(data)
    let generateMarkdown = generateMarkdown1(data);
    writeToFile(generateMarkdown);
  })
];

function writeToFile(generateMarkdown) {
  fs.writeFile("README.md", generateMarkdown, function (err) {
    err ? console.log(err) : console.log('Congratulations, you have successfully created a README.md for your project!');
  })
}



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

