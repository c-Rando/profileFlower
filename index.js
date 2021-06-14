const path = require("path");
const fs = require("fs");

const inquirer = require("inquirer");

const Manager = require("./assets/dependencies/lib/Manager-starter");
const Intern = require("./assets/dependencies/lib/Intern-starter");
const Engineer = require("./assets/dependencies/lib/Engineer-starter");

const outputDirectory = path.resolve(__dirname, "output")
const outputPath = path.join(outputDirectory, "renderedTeamSheet.html");
const renderer = require("./assets/dependencies/src/htmlRenderer");

//obj return make ana rray of teamembers , 

const teamMembers = [];

// .push() a new employee for each time they are created and loop over the 
// array for each time one is needed

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name?",
            //validate: ,
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the Manager's id?",
            //validate: ,
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manager's email address?",
            //validate: ,
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
            //validate: ,
        },
    ]) // represents the object that you are getting back
    .then((answers) => {
        const manager = new Manager (answers.managerName, answers.managerid, answers.officeNumber, answers.managerEmail);
        teamMembers.push(manager);
        console.log(teamMembers);
        //createTeam(); = asks user what tyoe of team member would like to add. inquirer with choices property, switch case, if engineer, run the engineer questions
    })
    // .catch(err => {
    //     if (err) {
    //         // Prompt couldn't be rendered in the current environment
    //       } else {
    //         // Something else went wrong
    //       }
    // });
};

createManager();

// function createTeam() {

//     switch (expression) { // expression  or inp param would be === to user choice .. engineer, intern
//         case x:
//             // code block
//             break;
//         case y:
//             // code block
//             break;
//         default:
//         // code block
//     };
// };

