"use strict";
// Class implementing the interface
class StudentProfile {
    name;
    role;
    skills;
    constructor(name, role, skills) {
        this.name = name;
        this.role = role;
        this.skills = skills;
    }
    displayProfile() {
        return `${this.name} - ${this.role}`;
    }
}
// Generic function: works with any type T
function displayData(data) {
    return data;
}
const student = new StudentProfile("Rahul Sharma", "Full Stack Developer", ["HTML", "CSS", "JavaScript", "React"]);
console.log(student.displayProfile());
console.log(displayData(student.skills));
