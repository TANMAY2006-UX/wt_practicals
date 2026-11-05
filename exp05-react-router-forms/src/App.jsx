import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Welcome to MyProfile</h1>;
}

function About() {
  return (
  <>
  <h1>About Me</h1>
    <h2> I am Third year IT student</h2>
  </>);
}

function Projects() {
  return (
  <>
  <h1>My Projects</h1>
    
  return (
  <>
    <h1>My Projects</h1>

    <ul>
      <li>DevOps</li>
      <li>Medicine Tracker</li>
    </ul>
  </>
);  
}
  </>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Controlled inputs: React state holds the value
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/projects">Projects</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
