const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        //retrieves from employee class
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }

}

    //Employee class export
    module.exports = Engineer;
