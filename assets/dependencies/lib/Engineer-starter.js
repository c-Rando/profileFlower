const Employee = require("./Employee-starter");


class Engineer extends Employee {

  constructor(name, id, email, gitHub) {
    super(name, id, email); // taking what exists inside of employee and 
    this.gitHub = gitHub; // makes a bunch of data sets that share characteristics
                            // but also have unique properties
  };

  getRole() {
    return "Engineer";
  };

  getOfficeNumber() {
    return this.gitHub;
  };

};

module.exports = Engineer;
