const profile = {
  name: "Rahul Sharma",
  role: "Web Developer",
  email: "rahul@example.com",
  about: "I am a student interested in web development.",
  skills: ["HTML", "CSS", "JavaScript", "React"]
};

// Destructuring
const { name, role, email, about, skills} = profile;

// Arrow function + higher-order function (map)
const displaySkills = (skillList) => {
  return skillList.map(skill => `<li>${skill}</li>`).join("");
};

document.getElementById("name").textContent = name;
document.getElementById("role").textContent = role;
document.getElementById("about").textContent = about;
document.getElementById("skills").innerHTML = displaySkills(skills);

// Closure: 'visible' remembers its value between clicks
const createToggleContact = () => {
  let visible = false;
  return () => {
    visible = !visible;
    document.getElementById("contact").textContent = visible ? email : "";
  };
};

const toggleContact = createToggleContact();
document.getElementById("contactBtn").addEventListener("click", toggleContact);
