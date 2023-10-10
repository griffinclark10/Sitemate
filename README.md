# Issues API Project
### INTRO
Hey! This is a little RESTful api project that I made for a sitemate coding challenge. The premise is to use client CLI to interact with a node server allowing users to create, read, update and delete issues. 

### SETUP   
Ensure npm is installed
```
git clone https://github.com/griffinclark10/Sitemate.git
cd issues-api
npm install
npm start
node client.js
```

### DESIGN CHOICES
I used Node.js for this project because of its ease setting up RESTful APIs. Express was used for thee server framework.
I used a CLI client because it made the project easiest test throughout the development process. It also makes for easy demonstration. 

### FUTURE IMPROVEMENTS
1. Authentication: implement user authentication to ensure data security.
2. Web client: create user friendly web client using React.
3. Persistent storage: integrate a database to store issues persistantly.