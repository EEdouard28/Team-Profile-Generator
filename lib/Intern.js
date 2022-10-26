const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        //retrieves from employee class
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        // console.log(this.school)
        return this.school;
    }

}

    //Employee class export
    module.exports = Intern;
