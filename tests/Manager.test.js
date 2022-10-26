//Team Profile Generator
const Manager = require("../lib/Manager");

test("can create office number through constructor", () => {
    const testValue = "800-555-3000"
    const manager = new Manager("Bella", 1, "bella@example.com", testValue);
    expect(manager.officenum).toBe(testValue);
});

test("can create grab office number through get office number method", () => {
    const testValue = "800-555-3000"
    const manager = new Manager("Bella", 1, "bella@example.com", testValue);
    expect(manager.getOfficenum()).toBe(testValue);
});

test("can create office number through constructor", () => {
    const testValue = "Manager"
    const manager = new Manager("Bella", 1, "bella@example.com", 100);
    expect(manager.getRole()).toBe(testValue);
});



