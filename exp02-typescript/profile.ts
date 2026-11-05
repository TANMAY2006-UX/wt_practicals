// Interface: describes the shape of a profile
interface Profile {
  name: string;
  role: string;
  skills: string[];
}

// Class implementing the interface
class StudentProfile implements Profile {
  name: string;
  role: string;
  skills: string[];

  constructor(name: string, role: string, skills: string[]) {
    this.name = name;
    this.role = role;
    this.skills = skills;
  }

  displayProfile(): string {
    return `${this.name} - ${this.role}`;
  }
}

// Generic function: works with any type T
function displayData<T>(data: T): T {
  return data;
}

const student = new StudentProfile(
  "Rahul Sharma",
  "Full Stack Developer",
  ["HTML", "CSS", "JavaScript", "React"]
);

console.log(student.displayProfile());
console.log(displayData(student.skills));
