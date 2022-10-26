//Team Profile Generator
const Intern = require("../lib/Intern");

test("Can set school utilizing constructor", () => {
    const testValue = "TCU"
    const intern = new Intern("Bella", 1, "test@example.com", testValue);
    expect(intern.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern"
    const intern = new Intern("Bella", 1, "test@example.com", "TCU");
    expect(intern.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
    const testValue = "TCU"
    const intern = new Intern("Bella", 1, "test@example.com", "TCU");
    expect(intern.getSchool()).toBe(testValue);
});



