class Manager {
    constructor(name, id, email, officenum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenum = officenum;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
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
