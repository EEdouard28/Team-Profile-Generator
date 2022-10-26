//DEPENDENCIES
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//output folder path sequence
const Output_Dir = path.resolve(__dirname,"dist");
const outputPath = path.join(Output_Dir, "index.html");

const render = require("./lib/htmlRender");

//Questions to be asked inquirer
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?",
    },

    {
        type: "input",
        name: "id",
        message: "What is the team member's id?",
    },

    {
        type:"input",
        name: "email",
        message: "What is the team member's email?",
    },

    {
        type: "list",
        name: "role",
        message: "What is the team member's role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

const team = [];

const generateTeam = () => {
    inquirer
    .prompt(questions)
    .then((response1) => {
        inquirer
        .prompt([
    {
            when: () => response1.role === "Manager",
            type: "input",
            message: "What is their office number",
            name: "officenum",
    },
    ])

    .then((response2) => {
        if(response1.role === "Manager"){
            const manager = new Manager(response1.name, response1.id, response1.email, 
                response1.role, response2.officenum);
                team.push(manager);
        } 
        if (response2.addMember) {
            generateTeam();
        }
        else {
            team.forEach((team) => {
                console.log(team);
            });
            fs.writeFileSync(outputPath, render(team), err => {
                if (err) {
                    throw err;
                }   
                console.log("Success");   
            });
        }
        });
    })
    .catch((err) => {
        if (err) {
          throw err;
        }
      });
  };

    generateTeam();