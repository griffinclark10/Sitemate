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

let currentId = issues.length + 1;

// Create an endpoint:
app.post('/issues', (req, res) => {
    const newIssue = {
        id: currentId,
        title: req.body.title,
        description: req.body.description,
    };
    issues.push(newIssue);
    currentId++;
    console.log(newIssue);
    res.status(201).json({ message: "Issue created", data: newIssue });
});

// Read endpoint
app.get('/issues', (req, res) => {
    res.json({ message: "Issues fetched", data: issues });
});

// Update endpoint
app.put('/issues/:id', (req, res) => {
    const issueID = parseInt(req.params.id); 
    const issue = issues.find(i => i.id === issueID); 
    if (issue) {
        issue.title = req.body.title; 
        issue.description = req.body.description;
        console.log(issue);
        res.json({ message: `Issue ${issueID} updated`, data: issue });
    } else {
        res.status(404).json({ message: "Issue not found" });
    }
});

// Delete endpoint
app.delete('/issues/:id', (req, res) => {
    const issueID = parseInt(req.params.id);
    const index = issues.findIndex(i => i.id === issueID);
    if (index !== -1) {
        const deletedIssue = issues.splice(index, 1);
        console.log(`Issue with ID: ${issueID} deleted:`, deletedIssue);
        res.json({ message: `Issue with ID: ${issueID} deleted`, data: deletedIssue });
    } else {
        res.status(404).json({ message: "Issue not found" });
    }
});
    

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  
module.exports = app;