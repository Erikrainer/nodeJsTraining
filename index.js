// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type:"input",
    name: "github",
    message: "What is your Github username ?"
    },
    {
    type:"input",
    name:"email",
    message: "What is your email address ?"
    },
    {
    type:"input",
    name: "title",
    message: "What is your project tittle ?"
    },
    {
    type:"input",
    name:"description",
    message: "Provide a short description for your project"
    },
    {
    type:"input",
    name:"installation",
    message: "What are the steps required to install your project?"
    },
    {
        type:"input",
        name:"link",
        message:"Do you have a deployed link ?"
    },
    {
    type:"input",
    name:"usage",
    message:"Provide instructions and examples for use."
    },
    {
    type:"input", 
    name:"credits",
    message:"List your contributors"  
    },
    {
    type:"list",
    name:"license",
    message:"What type of License do you want?",
    choices:["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
    type:"input",
    name:"test",
    message:"List the tests available for your project"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Creating your README!!");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}))
})
}

// Function call to initialize app
init();
