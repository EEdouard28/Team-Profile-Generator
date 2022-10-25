//DEPENDENCIES
const Manager = require(".lib/Manager");
const Engineer = require(".lib/Engineer");
const Intern = require(".lib/Intern");
const Employee = require(".lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//output folder path sequence
const Output_Dir = path.resolve(__dirname,"dist");
const outputPath = path.join(Output_Dir, "index.html");

const render = require(".lib/htmlRender");