//Packages needed for running application
const inquirer = require('inquirer');
const fs = require('fs');
var badge;

//Readme template to be generated 
const gernerateReadme = ({projectTitle, description, install, usage, license, contributors,tests, email, github} ) =>

`${badge}
# ${projectTitle}

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

## License <div id='license'/>
This project is run under the ${license} licensure

## Contributors <div id='contributors'/>
The contributors are: ${contributors}


## Test <div id='test'/>
For tests, run this command:
>${tests}

## Questions <div id='questions'/>
For quetions, please email at ${email} or visit my github profile at [${github}](https://github.com/${github})`;

// Init function that houses prompts and if/else badge statements 
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
      name: 'install',
      message: 'What is needed to run this application?',
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
    if (answers.license === 'MIT') {
      console.log("MIT");
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (answers.license ==='APACHE 2.0') {
      console.log("APACHE");
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (answers.license === 'GPL 3.0') {
      console.log("GPL");
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (answers.license === 'BSD 3') {
      console.log("BSD");
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      badge = "";
    }
    const readmeContent = gernerateReadme(answers);

    fs.writeFile('README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Created readme file')
    );
  }); 
}

// Function call to initialize app
init();
