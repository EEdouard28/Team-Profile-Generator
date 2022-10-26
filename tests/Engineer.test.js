//Team Profile Generator
const Manager = require("../lib/Engineer");

test("can set github thru constructor", () => {
    const testValue = "GitHubUser"
    const engineer = new Engineer("Bella", 1, "test@example.com", testValue);
    expect(engineer.github).toBe(testValue);
});

test("can get get github username via getGithub()", () => {
    const testValue = "GitHub User"
    const engineer = new Engieer("Bella", 1, "test@example.com", GitHubUser);
    expect(engineer.getGithub()).toBe(testValue);
});

test("getRole() should set role as \"employee\"", () => {
    const testValue = "Manager"
    const manager = new Manager("Bella", 1, "bella@example.com", 100);
    expect(manager.getRole()).toBe(testValue);
});



