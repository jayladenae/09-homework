// TODO: Include packages needed for this application
 const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    inquirer

  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a breif description of your project.',
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
        'The Unlicense'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'List any and all contributers.',
      name: 'contributers',
    },
    {
        type: 'input',
        message: 'Please, step-by-step, explain how to testing instructions.',
        name: 'test',
      },
      {
        type: 'input',
        message: 'Please, enter a form of contact, so anyone can reach you with any questions for your project.',
        name: 'questions',
      }
  ])
  .then((response) =>
   console.log(response)
  )
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
