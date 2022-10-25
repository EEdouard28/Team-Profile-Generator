//Team Profile Generator
const Employee = require("../lib/Employee");

//Initilization
test("should return instance of new employee object", () => {
        const newHire = new Employee();
        expect(typeof newHire).toBe("object");
    });

test("can set name thru constructor", () => {
    const name = "Bella";
    const newHire = new Employee(name);
    expect(newHire.name).toBe(name);
});

test("can set id thru constructor", () => {
    const testValue = 100;
    const newHire = new Employee("newid", testValue);
    expect(newHire.id).toBe(testValue);
});

test("can set email thru constructor", () => {
    const testValue = "example@example.com"
    const newHire = new Employee("newid", 1, testValue);
    expect(newHire.email).toBe(testValue);
});

test("Retrieve name via getName()", () => {
    const testValue = "Bella";
    const newHire = new Employee(testValue);
    expect(newHire.getName()).toBe(testValue);
  });

  test("Retrieve id via getId()", () => {
    const testValue = 100;
    const newHire = new Employee("newid", testValue);
    expect(newHire.getId()).toBe(testValue);
  });

  test("Retrieve email via getEmail()", () => {
    const testValue = "example@example.com";
    const newHire = new Employee("newid", 1, testValue);
    expect(newHire.getEmail()).toBe(testValue);
  });
