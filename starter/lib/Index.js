const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');
const render = require('../src/page-template');


const newTeam = [];


// creating Managers object
const teamManager = () => {
    
    inquirer.prompt([
    
    {
        type: 'input',
        name: 'manName',
        message: 'Please add team managers name'
    },
    {
        type: 'input',
        name: 'manId',
        message: 'Please add team managers ID'
    },
    {
        type: 'input',
        name: 'manEmail',
        message: 'Please add team managers email address'
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Please add team managers office number'
    },

]).then(response1 => {

// pushing Managers data into teams array

    const newManager = new Manager(response1.manName, response1.manId, response1.manEmail, response1.officeNum);
    newTeam.push(newManager);
    choice();

})
}


// prompting the user to chose the action

const choice = () => {

    inquirer.prompt([
    {
    type: 'list',
    name: 'options',
    message: 'Please slect one of the options',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
    }

]).then(response2 => {
    if (response2.options === 'Add an engineer'){
        teamEngineer();
    }  else if (response2.options === 'Add an intern'){
        teamIntern();
    } else {
        createTeam();
    }

});

};


//  create Engineer object

const teamEngineer = () => {
    inquirer.prompt([
    
    {
        type: 'input',
        name: 'engName',
        message: 'Please add engineers name'
    },
    {
        type: 'input',
        name: 'engId',
        message: 'Please add engineers ID'
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Please add engineers email address'
    },
    {
        type: 'input',
        name: 'engGitHub',
        message: 'Please add engineers Github username'
    }

]).then(response3 => {
    const newEngineer = new Engineer(response3.engName, response3.engId, response3.engEmail, response3.engGitHub);
    newTeam.push(newEngineer);
    choice();

})

};

// create Intern object
const teamIntern = () => {
    inquirer.prompt([
    
    {
        type: 'input',
        name: 'intName',
        message: 'Please add interns name'
    },
    {
        type: 'input',
        name: 'intId',
        message: 'Please add interns ID'
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Please add interns email address'
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'Please add intern school'
    },

]).then(response4 => {
    const newIntern = new Intern (response4.intName, response4.intId, response4.intEmail, response4.intSchool);
    newTeam.push(newIntern);
    choice();
})

}


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err)
        : console.log('Success');
    })
    
}

// function to initialize program
function createTeam() { 
    writeToFile('../output/team.html', render(newTeam));
       
}

// function call to initialize program

teamManager();