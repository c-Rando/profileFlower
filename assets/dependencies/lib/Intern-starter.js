const Employee = require("./Employee-starter");

class Intern extends Employee {

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  };

  getRole() {
    return "Intern";
  };

  getOfficeNumber() {
    return this.school;
  };

};

module.exports = Intern;
