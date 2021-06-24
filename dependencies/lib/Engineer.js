const Employee = require("./Employee");


class Engineer extends Employee {

  constructor(name, id, email, gitHub) {
    super(name, id, email); // taking what exists inside of employee and 
    this.github = gitHub;   // makes a bunch of data sets that share characteristics
                            // but also have unique properties
  };

  getRole() {
    return "Engineer";
  };

  getGithub() {
    return this.github;
  };

};

module.exports = Engineer;
