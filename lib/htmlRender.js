const path = require("path");
const fs = require("fs");


//need to show ID number and phone number
const render = (team) => {
    const html = [];
    const renderManager = (manager) => {
      return `
      <div class="main">
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${manager.getRole()}</h3>
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getEmail()}</p>
    <a href="#" class="btn btn-primary">Office Number:${manager.getOfficenum()}</a>
  </div>
</div>
</div>
      `
    }
    const renderEngineer = (engineer) => {
      return `
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${engineer.getRole()}</h3>
    <h5 class="card-title">${engineer.getName()}</h5>
    <p class="card-text">${engineer.getEmail()}</p>
    <a href="http://www.github.com/${engineer.getGithub()}" class="btn btn-primary">GitHub:</a>
  </div>
</div>
      `
    }
    const renderIntern = (intern) => {
      return `
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${intern.getRole()}</h3>
    <h5 class="card-title">${intern.getName()}</h5>
    <h5 class="card-text">${intern.getEmail()}</h5>
    <h5 class="card-text">${intern.getSchool()}</h5>
  </div>
</div>
      `
    }
    html.push(
        ...team.filter((team) => team.getRole() === "Manager").map((manager) => renderManager(manager))
    );
    html.push(
      ...team.filter((team) => team.getRole() === "Engineer").map((engineer) => renderEngineer(engineer))
    );
    html.push(
    ...team.filter((team) => team.getRole() === "Intern").map((intern) => renderIntern(intern))
);

    return html.join("");
};

module.exports = team => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <link rel="stylesheet" href="../dist/style.css"/>
    <title>Team Profile Generator</title>
</head>
<body>
<main>
<header>
<h1>My Team</h1>
</header>
 ${render(team)}  
</main> 
</body>
</html>
  `
}; 

