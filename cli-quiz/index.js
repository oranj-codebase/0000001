import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import chalk from 'chalk';
import { exec } from 'child_process';

function displayOrdinautzBanner(callback) {
    exec('python3 ordinautz.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        // Split the stdout into lines
        const lines = stdout.split('\n');
        // Print all lines in yellow
        lines.forEach(line => {
            console.log(chalk.yellow(line));
        });
        callback();
    });
  }

let totalCorrect = 0;

async function askQuestion(question, answers, correctAnswerIndex) {
    const options = []
    answers.forEach((answer) => {
        options.push({ value: answer, label: answer })
    })

    const s = p.spinner();
    s.start();
    await setTimeout(1000);
    s.stop();
    
    const answer = await p.select({
        message: question,
        initialValue: '1',
        options: options,
    });

    if (answer == answers[correctAnswerIndex]) {
        totalCorrect += 1;
    }
}

class Question {
    constructor(question, answersArray, correctAnswerIndex) {
        this.question = question;
        this.answersArray = answersArray;
        this.correctAnswerIndex = correctAnswerIndex;
    }
}

async function main() {
    console.log(chalk.bgBlack(chalk.yellow('Welcome to the Ordinautz Quiz!\n')));

    const question1 = new Question(
        "What is the name of the Ordinautz founder?",
        ["Hantoshi", "Good", "Frogtoshi", "ZKShark", "Danny"],
        0 // correct answer index
    );

    const question2 = new Question(
        "Who is the founder of MetaBRC?",
        ["Hantoshi", "Good", "Frogtoshi", "ZKShark", "Danny"],
        1 // correct answer index
    );

    const question3 = new Question(
        "Who is the founder of Bitcoin Frogs?",
        ["Hantoshi", "Good", "Frogtoshi", "ZKShark", "Danny"],
        2 // correct answer index
    );

    const question4 = new Question(
        "Who is the founder of Ordinal Maxi Biz?",
        ["Hantoshi", "Good", "Frogtoshi", "ZKShark", "Danny"],
        3 // correct answer index
    );

    const question5 = new Question(
        "Who is the founder of Onchain Monkeys?",
        ["Hantoshi", "Good", "Frogtoshi", "ZKShark", "Danny"],
        4 // correct answer index
    );

    await askQuestion(question1.question, question1.answersArray, question1.correctAnswerIndex);
    await askQuestion(question2.question, question2.answersArray, question2.correctAnswerIndex);
    await askQuestion(question3.question, question3.answersArray, question3.correctAnswerIndex);
    await askQuestion(question4.question, question4.answersArray, question4.correctAnswerIndex);
    await askQuestion(question5.question, question5.answersArray, question5.correctAnswerIndex);
    
    
    console.log(`You got ${totalCorrect} correct!`);

    if (totalCorrect == 5) {
        console.log(chalk.green("You are now an Ordinaut! Congratulations!"));
    } else {
        console.log(chalk.red("You need to score 5/5 to venture into space with us."));
    }

    console.log(chalk.bgBlack(chalk.yellow('Thanks for playing!')));
}

displayOrdinautzBanner(main);