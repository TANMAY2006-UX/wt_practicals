const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory data (replaced by MongoDB in Experiment 7)
let projects = [
  { id: 1, title: "Portfolio Website", description: "My personal portfolio" }
];
let nextId = 2;

// GET all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// GET one project
app.get("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id === Number(req.params.id));
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// POST create project
app.post("/api/projects", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "title and description are required" });
  }
  const project = { id: nextId++, title, description };
  projects.push(project);
  res.status(201).json(project);
});

// PUT update project
app.put("/api/projects/:id", (req, res) => {
  const project = projects.find(p => p.id === Number(req.params.id));
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  project.title = req.body.title ?? project.title;
  project.description = req.body.description ?? project.description;
  res.json(project);
});

// DELETE project
app.delete("/api/projects/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = projects.some(p => p.id === id);
  if (!exists) {
    return res.status(404).json({ message: "Project not found" });
  }
  projects = projects.filter(p => p.id !== id);
  res.json({ message: "Project deleted successfully" });
});

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Central error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
