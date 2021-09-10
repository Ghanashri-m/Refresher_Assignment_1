class Employee {
    constructor({ name, role = "assistant" } = {}) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
    
    // Static method
    static canSupervise(instructor) {
      return (instructor.role === 'assistant');
    }
  }
  
  let seniorEmployee = new Employee({ 'name' : 'Ghanashri' });
  let juniorEmployee = new Employee({ 'name' : 'Keerthi', "role" : "Junior Assistant" });
  
  seniorEmployee.renderDetails(); // "Ghanashri - assistant"
  juniorEmployee.renderDetails(); // "Keerthi - Junior Assistant"
  
  // "Ghanashri can supervise: true"
  console.log(
    `${seniorEmployee.name} can supervise: ${Employee.canSupervise(seniorEmployee)}`
  );
  
  // "Keerthi can supervise: false"
  console.log(
    `${juniorEmployee.name} can supervise: ${Employee.canSupervise(juniorEmployee)}`
  );