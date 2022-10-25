const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officenum) {
        //retrieves from employee class
        super(name, id, email)
        this.officenum = officenum;
    }

    getRole() {
        return "Manager";
    }

    getOfficenum() {
        return this.officenum
    }
}

    //Employee class export
    module.exports = Manager;
