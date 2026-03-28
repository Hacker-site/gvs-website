const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

let students = [];
let results = [];

// Admission Form
app.post("/admission", (req, res) => {
  students.push(req.body);
  res.json({ message: "Admission Successful" });
});

// Login
app.post("/login", (req, res) => {
  const { name } = req.body;
  const student = students.find(s => s.name === name);

  if (student) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Add Result (manual)
results.push({ name: "Anmol", marks: 450 });

// Get Result
app.get("/result/:name", (req, res) => {
  const result = results.find(r => r.name === req.params.name);

  if (result) {
    res.json(result);
  } else {
    res.json({ message: "No Result Found" });
  }
});

// ✅ FIXED PORT (IMPORTANT)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port " + PORT));
