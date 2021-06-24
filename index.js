const Manager = require("./dependencies/lib/Manager");
const Engineer = require("./dependencies/lib/Engineer");
const Intern = require("./dependencies/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./dependencies/src/htmlRenderer");

const teamMembers = [];
const idArray = [];

async function promptForUniqueId (answers) {
  while (idArray.includes(answers.id)) {
    const { id } = await inquirer.prompt([
      {
        name: 'id',
        message: "Id is already used. Please insert another id"
      }
    ]);
    answers.id = id;
  }
}

function appMenu() {

  function createManager() {
    console.log("Please build your team");
    inquirer.prompt([
      {
        name: 'name',
        message: "Please type the manager name"
      },
      {
        name: 'id',
        message: "Please type the engineer id"
      },
      {
        name: 'email',
        message: "Please type the manager email"
      },
      {
        name: 'officeNumber',
        message: "Please type the manager office number"
      }
    ]).then(async (answers) => {
      console.log(answers);
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
      idArray.push(answers.id);
      createTeam();
    });
  }

  function createTeam() {

    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members"
        ]
      }
    ]).then(userChoice => {
      switch(userChoice.memberChoice) {
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      default:
        buildTeam();
      }
    });
  }

  function addEngineer() {
    inquirer.prompt([
      {
        name: 'name',
        message: "Please type the engineer name"
      },
      {
        name: 'id',
        message: "Please type the engineer id"
      },
      {
        name: 'email',
        message: "Please type the engineer email"
      },
      {
        name: 'github',
        message: "Please type the engineer github profile"
      }
    ]).then(async (answers) => {
      console.log(answers);
      await promptForUniqueId(answers);
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamMembers.push(engineer);
      idArray.push(answers.id);
      createTeam();
    });
  }

  function addIntern() {
    inquirer.prompt([
      {
        name: 'name',
        message: "Please type the intern name"
      },
      {
        name: 'id',
        message: "Please type the intern id"
      },
      {
        name: 'email',
        message: "Please type the intern email"
      },
      {
        name: 'github',
        message: "Please type the intern school"
      }
    ]).then(async (answers) => {
      console.log(answers);
      await promptForUniqueId(answers);
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamMembers.push(intern);
      idArray.push(answers.id);
      createTeam();
    });
  }

  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();

}


appMenu();
