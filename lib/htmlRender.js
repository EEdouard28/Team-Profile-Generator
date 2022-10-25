const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = (employees) => {
    const html = [];

    html.push(
        ...employees.filter((employee) => employee.getRole() === "Manager").map((manager) => renderManager(manager))
    );

    return renderMain(html.join(""));
};

//Manager profile information
const renderManager = (manager) => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = employeePlaceholders(template, "name", manager.getName());
    template = employeePlaceholders(template, "role", manager.getRole());
    template = employeePlaceholders(template, "email", manager.getEmail());
    template = employeePlaceholders(template, "id", manager.getId());
    template = employeePlaceholders(template, "officeNumber", manager.getofficenum());
    return template;
  };

  const renderMain = (html) => {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
    return employeePlaceholders(template, "team", html);
  };


  const employeePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
  };
  
module.exports = render; 

