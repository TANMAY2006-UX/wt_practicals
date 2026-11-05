import { useState, useEffect } from "react";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [pageTitle, setPageTitle] = useState("");

  const profile = {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    email: "rahul@example.com",
    skills: ["HTML", "CSS", "JavaScript", "React"]
  };

  // useEffect runs after render: updates the browser tab title
  useEffect(() => {
    document.title = profile.name;
    setPageTitle(profile.name);
  }, []);

  return (
    <div>
      <h1>{profile.name}</h1>
      <h2>{profile.role}</h2>

      <h3>Skills</h3>
      <ul>
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={() => setShowContact(!showContact)}>
        Contact Me
      </button>

      {showContact && <p>{profile.email}</p>}
    </div>
  );
}

export default App;
