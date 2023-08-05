const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const projects = [
  { id: 1, name: "Ordinautz" },
  { id: 2, name: "MetaBRC" },
  { id: 3, name: "Bitcoin Frogs" },
  { id: 4, name: "Onchain Maxi Biz" },
  { id: 5, name: "Onchain Monkeys" },
];

const relationships = [
  { founderId: 6, projectId: 1 },
  { founderId: 7, projectId: 2 },
  { founderId: 8, projectId: 3 },
  { founderId: 9, projectId: 4 },
  { founderId: 10, projectId: 5 },
];

const founders = {
  6: "Hantoshi",
  7: "Good",
  8: "Frogtoshi",
  9: "ZKShark",
  10: "Danny",
};

const technologies = {
  1: "Recursive Inscription",
  2: "Recursive Inscription",
  3: "Inscription",
  4: "Inscription",
  5: "Recursive reinscription",
};

function listProjects() {
  console.log("Choose a project:");
  projects.forEach(project => {
    console.log(`${project.id}. ${project.name}`);
  });
}

function main() {
  rl.question("Do you want to know the Ordinal Players? (Yes/No): ", answer => {
    if (answer.toLowerCase() === 'yes') {
      listProjects();
      rl.question("Select a project by number: ", projectChoice => {
        rl.question("Choose founder or technology: ", choice => {
          const projectId = parseInt(projectChoice);
          if (choice.toLowerCase() === 'founder') {
            relationships.forEach(rel => {
              if (rel.projectId === projectId) {
                console.log(`Founder: ${founders[rel.founderId]}`);
              }
            });
          } else if (choice.toLowerCase() === 'technology') {
            console.log(`Technology: ${technologies[projectId]}`);
          } else {
            console.log("Invalid choice.");
          }
          rl.close();
        });
      });
    } else if (answer.toLowerCase() === 'no') {
      console.log("Few understand, you are the many.");
      rl.close();
    } else {
      console.log("Invalid response. Please answer with 'Yes' or 'No'.");
      rl.close();
    }
  });
}

main();