# Gaming Quiz App 🎮
> React Application

This project is built with the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to create profiles where they can play quizzes and test their knowledge on game topics.

### Technologies Used
<li>Visual Studio Code</li>
<li>JavaScript</li>
<li>Node.js, Express.js</li>
<li>HTML5, CSS3</li>
<li>React</li>
<li>Axios</li>
<li>npm</li>
<li>MongoDB, MongoDB Compass, Mongoose</li>
<li>Postman</li>

### Installed Packages
**Backend**:express, cors, dotenv, bcrypt, jsonwebtoken, mongoose, nodemon
**Frontend**: react, react-dom, axios, lottie-react


## Installation and Running
To get started with this project, you need to have the following installed on your machine:
1. **A modern web browser**
2. **Visual Studio Code** (optional, but recommended)
3. **Node.js**

Steps to Install the Project:
1. **Clone and open the Repository**:
   Open a terminal (or command prompt on your machine) and run the following commands:
   
   ```bash
   git https://github.com/ivonaaaa/QuizApp.git
   ```
   ```bash
   cd https://github.com/ivonaaaa/QuizApp.git
   ```
2. **Open the project in VS Code**:
   In the same terminal type in this command:
   
   ```bash
   Code .
   ```
3. **Install the dependencies**:
   Once you're in the VS Code, open two new terminals and type in these commands:
    
   ```bash
   npm install
   ```
   ```bash
   cd server
   npm install
   ```
4. **Set up the environment:**
   Create a .env file based on .env.example. Add you values.

5. **Create and connect to the database:**
   Open MongoDB and create a new database. Take note of MONGO_URI as you need this in your .env file mentioned in the previous step.

6. **Start the backend:**
   ```bash
   cd server
   npm run start
   ```

7. **Seed the database:**
   ```bash
   node models/seed.js
   ```
8. **Run the frontend**: 
   ```bash
   npm run dev
   ```
   Open the provided link in your browser to view the application.




