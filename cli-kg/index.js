const inquirer = require('inquirer');
const neo4j = require('neo4j-driver');

const url = 'bolt://your-neo4j-host:port'; // e.g., 'bolt://localhost:7687' or 'neo4j://example.com:7687'
const username = 'your-username'; // e.g., 'neo4j'
const password = 'your-password'; // e.g., 'secret'

const driver = neo4j.driver(url, neo4j.auth.basic(username, password));

function askAboutOrdinalTheory() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'learn',
      message: 'Do you want to learn about the ordinal theory?',
    },
  ]).then((answers) => {
    if (answers.learn) {
      chooseProject();
    } else {
      console.log('Few understand, you are the many');
    }
  });
}

function chooseProject() {
  // Query the list of projects from the graph database
  const session = driver.session();
  session.run('MATCH (p:Project) RETURN p.name AS name')
    .then((result) => {
      const projects = result.records.map((record) => record.get('name'));
      inquirer.prompt([
        {
          type: 'list',
          name: 'project',
          message: 'Choose a project:',
          choices: projects,
        },
      ]).then((answers) => {
        chooseFounderOrTechnology(answers.project);
      });
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      session.close();
    });
}

function chooseFounderOrTechnology(project) {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Choose between the founder and the technology:',
      choices: ['Founder', 'Technology'],
    },
  ]).then((answers) => {
    if (answers.choice === 'Founder') {
      showFounderDetails(project);
    } else {
      showTechnologyDetails(project);
    }
  });
}

function showFounderDetails(project) {
  // Query the founder details from the graph database
  // ...
}

function showTechnologyDetails(project) {
  // Query the technology details from the graph database
  // ...
}

// Start the CLI
askAboutOrdinalTheory();
