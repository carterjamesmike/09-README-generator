// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const gernerateReadme = ({projectTitle, description, install, usage, licence, contributors,tests, email, github }) =>
  `# ${projectTitle}

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Licence](#licence)
4. [Contributors](#contributors)
5. [Test](#test)
6. [Questions](#questions)


## Installation <div id='installation'/>
To install, run this command:
>${install}

## Usage <div id='usage'/>
${usage}

## Licence <div id='licence'/>
This project is run under the ${licence} licensure

## Contributors <div id='contributors'/>
The contributors are: ${contributors}


## Test <div id='test'/>
For tests, run this command:
>${tests}

## Questions <div id='questions'/>
For quetions, please email at ${email} or visit the repo at ${github}`;


// TODO: Create a function to write README file
function writeToFile(answers) {

}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your github user name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description about the project.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is this project under?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command is needed to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know to use the repo?',
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Who are the contributors?',
    },
  ])
  .then((answers) => {
    const readmeContent = gernerateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Created readme file')
    );
  }); 
}

// Function call to initialize app
init();
