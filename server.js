const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let students = [];
let results = [];

app.post('/admission', (req, res) => {
    students.push(req.body);
    res.send("Saved");
});

app.get('/result/:roll', (req, res) => {
    let r = results.find(x => x.roll === req.params.roll);
    res.json(r || {});
});

app.listen(3000, () => console.log("Server running"));
