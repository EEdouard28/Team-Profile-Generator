//Team Profile Generator
const Employee = require("../lib/Employee");

//Initilization
test("should return instance of new employee object", () => {
        const newHire = new Employee();
        expect(typeof newHire).toBe("object");
    })
