const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');
const render = require('../src/page-template');


const team = [];


const teamManager = inquirer.prompt([
    
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

]);

const newManager = new Manager(teamManager.manName, teamManager.manId, teamManager.manEmail, teamManager.officeNum);
team.push(newManager);

const choice = {
    type: 'list',
    name: 'options',
    message: 'Please slect one of the options',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team']
}



const teamEngineer = [
    
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
    },

]

const newEngineer = new Engineer(teamEngineer.engName, teamEngineer.engId, teamEngineer.engEmail, teamEngineer.engGitHub);
team.push(newEngineer);

const teamIntern = [
    
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

]

const newIntern = new Intern (teamIntern.intName, teamIntern.intId, teamIntern.intEmail, teamIntern.intSchool);
team.push(newIntern);