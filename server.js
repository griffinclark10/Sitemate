const express = require('express');
const app = express();
const PORT = 3001;

//parse json
app.use(express.json());

const issues = [{
    id: 1,
    description: 'Issue 1',
}, {
    id: 2,
    description: 'Issue 2',
    }];

//Create an endpoint:
app.post('/issues', (req, res) => {
    console.log(req.body);
    res.status(201).send("Issue created");
});

//read endpoint
app.get('/issues', (req, res) => {
    res.json(issues);
});

//update endpoint
app.put('/issues/:id', (req, res) => {
    console.log(req.body);
    res.send("Issue updated");
});

//delete endpoint
app.delete('/issues/:id', (req, res) => {
    console.log(`Issue with ID: ${req.params.id} to be deleted`);
    res.send('Issue deleted');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });