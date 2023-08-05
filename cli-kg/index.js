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
    rl.question("Do you want to know the Ordinal Players? (Yes/No/Back/Exit): ", answer => {
      if (["yes", "y"].includes(answer.toLowerCase())) {
        listProjects();
        rl.question("Select a project by number (or 'B' to go back, 'Exit' to exit): ", projectChoice => {
          if (["b", "back"].includes(projectChoice.toLowerCase())) {
            main();
            return;
          }
          if (projectChoice.toLowerCase() === 'exit') {
            rl.close();
            return;
          }
          const projectId = parseInt(projectChoice);
          const askChoice = () => {
            rl.question("Choose founder or technology (or 'B' to go back, 'Exit' to exit): ", choice => {
              if (["b", "back"].includes(choice.toLowerCase())) {
                main();
                return;
              }
              if (choice.toLowerCase() === 'exit') {
                rl.close();
                return;
              }
              if (["founder", "f"].includes(choice.toLowerCase())) {
                relationships.forEach(rel => {
                  if (rel.projectId === projectId) {
                    console.log(`Founder: ${founders[rel.founderId]}`);
                  }
                });
                rl.close();
              } else if (["technology", "t"].includes(choice.toLowerCase())) {
                console.log(`Technology: ${technologies[projectId]}`);
                rl.close();
              } else {
                console.log("Invalid choice. Try again.");
                askChoice();
              }
            });
          };
          askChoice();
        });
      } else if (["no", "n"].includes(answer.toLowerCase())) {
        console.log("Few understand, you are the many.");
        rl.close();
      } else if (["b", "back"].includes(answer.toLowerCase())) {
        main();
      } else if (answer.toLowerCase() === 'exit') {
        rl.close();
      } else {
        console.log("Invalid response. Try again.");
        main();
      }
    });
  }
  
  main();
  