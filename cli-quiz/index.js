import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import chalk from 'chalk';



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

    await askQuestion(question1.question, question1.answersArray, question1.correctAnswerIndex);
    await askQuestion(question2.question, question2.answersArray, question2.correctAnswerIndex);

    console.log(`You got ${totalCorrect} correct!`);

    if (totalCorrect == 10) {
        console.log(chalk.green("You are now an Ordinaut! Congratulations!"));
    } else {
        console.log(chalk.red("You need to score 10/10 to venture into space with us."));
    }

    console.log(chalk.bgBlack(chalk.yellow('Thanks for playing!')));
}

main();