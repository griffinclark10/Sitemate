const readline = require('readline'); //cli
const axios = require('axios'); //http reqs

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//create functions for each HTTP request type
function createIssue() {
    rl.question('Enter issue title: ', (title) => {
        rl.question('Enter issue description: ', (description) => {
            axios.post('http://localhost:3001/issues', {
                title,
                description
            }).then((res) => {
                console.log(res.data);
                rl.close();
            }).catch((err) => {
                console.log("Error generating issue: ", err);
                rl.close();
            });
        });
    });
}

function readIssue() {
    axios.get('http://localhost:3001/issues').then((res) => {
        console.log(res.data);
        rl.close();
    }).catch((err) => {
        console.log("Error reading issue: ", err);
        rl.close();
    });
}

function updateIssue() {
    rl.question('Enter issue ID: ', (id) => {
        rl.question('Enter issue title: ', (title) => {
            rl.question('Enter issue description: ', (description) => {
                axios.put(`http://localhost:3001/issues/${id}`, {
                    title,
                    description
                }).then((res) => {
                    console.log(res.data);
                    rl.close();
                }).catch((err) => {
                    console.log("Error updating issue: ", err);
                    rl.close();
                });
            });
        });
    });
}

function deleteIssue() {
    rl.question('Enter issue ID: ', (id) => {
        axios.delete(`http://localhost:3001/issues/${id}`).then((res) => {
            console.log(res.data);
            rl.close();
        }).catch((err) => {
            console.log("Error deleting issue: ", err);
            rl.close();
        });
    });
}


function menu() {
    console.log(
        `Welcome to the Issue Tracker! Please chose an option:
        1. Create Issue
        2. Read Issue
        3. Update Issue
        4. Delete Issue`
    );
    rl.question('Enter your choice number: ', (choice) => {
        switch (choice) {
            case '1':
                createIssue();
                break;
            case '2':
                readIssue();
                break;
            case '3':
                updateIssue();
                break;
            case '4':
                deleteIssue();
                break;
            default:
                console.log("Invalid choice");
                rl.close();
                break;
        }
    })
}

menu();