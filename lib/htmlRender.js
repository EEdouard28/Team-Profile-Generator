const path = require("path");
const fs = require("fs");



const render = (team) => {
    const html = [];
    const renderManager = (manager) => {
      return `
      <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h3 class="card-title">${manager.getRole()}</h3>
    <h5 class="card-title">${manager.getName()}</h5>
    <p class="card-text">${manager.getEmail()}</p>
    <a href="#" class="btn btn-primary">Office Number:${manager.getOfficenum()}</a>
  </div>
</div>
      `
    }
    // Do same as above for render engineer, render intern
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

//Manager profile information
// const renderManager = (manager) => {
//     let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
//     template = employeePlaceholders(template, "name", manager.getName());
//     template = employeePlaceholders(template, "role", manager.getRole());
//     template = employeePlaceholders(template, "email", manager.getEmail());
//     template = employeePlaceholders(template, "id", manager.getId());
//     template = employeePlaceholders(template, "officeNumber", manager.getofficenum());
//     return template;
//   };

//   const renderMain = (html) => {
//     const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
//     return employeePlaceholders(template, "team", html);
//   };


//   const employeePlaceholders = (template, placeholder, value) => {
//     const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
//     return template.replace(pattern, value);
//   };
  
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
    <title>Document</title>
</head>
<body>
 ${render(team)}   
</body>
</html>
  `
}; 

