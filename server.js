const express = require('express');
const app = express();
const PORT = 3001;

//parse json
app.use(express.json());

const issues = [{
    id: 1,
    title: 'Issue 1',
    description: 'This is issue 1',
}, {
    id: 2,
    title: 'Issue 2',
    description: 'This is issue 2',
    }];

//Create an endpoint:
app.post('/issues', (req, res) => {
    const newIssue = {
        id: issues.length + 1,
        title: req.body.title,
        description: req.body.description,
    };
    issues.push(newIssue);
    console.log(req.body);
    res.status(201).send("Issue created");
});

//read endpoint
app.get('/issues', (req, res) => {
    res.json(issues);
});

//update endpoint
app.put('/issues/:id', (req, res) => {
    const issueID = parseInt(req.params.id); 
    const issue = issues.find(i => i.id === issueID); 
    if (issue) {
        issue.title = req.body.title; 
        issue.description = req.body.description;
        console.log(req.body);
        res.send(`Issue ${issueID} updated: ${issue.title} - ${issue.description}`);
    } else {
        res.status(404).send("Issue not found");
    }
});


//delete endpoint
app.delete('/issues/:id', (req, res) => {
    const issueID = parseInt(req.params.id);
    const index = issues.findIndex(i => i.id === issueID);
    if (index !== -1) {
        issues.splice(index, 1);
        console.log(`Issue with ID: ${issueID} deleted: ${req.body}`);
        res.send(`Issue with ID: ${issueID} deleted`);
    } else {
        res.status(404).send("Issue not found");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });