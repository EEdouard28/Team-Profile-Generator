//Team Profile Generator
const Engineer = require("../lib/Engineer");

test("can set github thru constructor", () => {
    const testValue = "GitHubUser"
    const engineer = new Engineer("Bella", 1, "test@example.com", testValue);
    expect(engineer.github).toBe(testValue);
});

test("can get get github username via getGithub()", () => {
    const testValue = "GitHub User"
    const engineer = new Engineer("Bella", 1, "test@example.com", testValue);
    expect(engineer.getGithub()).toBe(testValue);
});

test("getRole() should set role as \"employee\"", () => {
    const testValue = "Engineer"
    const engineer = new Engineer("Bella", 1, "bella@example.com", 100);
    expect(engineer.getRole()).toBe(testValue);
});



