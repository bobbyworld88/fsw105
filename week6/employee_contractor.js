const employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        console.log(`Name: ${this.name}, Job: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`);
    };
}

let Robert = new Employee('Robert Young', 'SharePoint Guy', 75000, 'Full-Time');

let Luna = new Employee('Luna Young', 'Baby', 1200000, 'Full-Time');

let Syn = new Employee('Syn Young', 'Mother', 50000, 'Full-Time');

employees.push(Robert, Luna, Syn);

console.log(`BobbyWorld ${employees}`);

Luna.status = 'Part-Time';

Robert.printEmployeeForm();
Luna.printEmployeeForm();
Syn.printEmployeeForm();