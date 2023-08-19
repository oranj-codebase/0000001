#!/usr/bin/env node


import * as p from '@clack/prompts';
import { setTimeout } from 'node:timers/promises';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
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
    console.log(chalk.bgBlack(chalk.redBright('Welcome to the Ordinautz Quiz!\n')));

    const question1 = new Question(
        "How do you inscribe metadata onto a satoshi?",
        ["Inception","Inscription","Injection","Email"],
        1 // correct answer index
    );

    const question2 = new Question(
        "What secondary layer network is used to scale Bitcoin transactions?",
        ["Imagine dragons","Thunder","Lightening","Storm"],
        2 // correct answer index
    );

    const question3 = new Question(
        "What did the OCM team create that enables easy storage of large files on chain?",
        ["Recursive Inscription","Recursive Injection","Repurposed Inscription","Receive Transmission"],
        0 // correct answer index
    );

    const question4 = new Question(
        "What is Ordinautz' mission statement?",
        ["Map out the Ordinal space","Tap out the Ordinal space","Crap on the Ordinal space","Fap to the Ordinal space"],
        0 // correct answer index
    );

    const question5 = new Question(
        "How many satoshis are there in one block?",
        ["1 million","10 million","100 billion","100 million"],
        3 // correct answer index
    );

    const question6 = new Question(
        "What is the full form of UTXO?",
        ["Unkept transaction output", "Unspent transaction output", "Unmet transition output", "Unspent transmission output"],
        1 
    );

    const question7 = new Question(
        "What consensus algorithm does Bitcoin utilise?",
        ["Proof of Cake","Proof of Stake","Proof of Work","Proof of Word"],
        2
    );

    const question8 = new Question(
        "Who are the founders of Ordinautz?",
        ["Kluless and Hantoshi", "Fluless and Mantoshi", "Killer Queen and Darth Vader", "Peepee and Poopoo"],
        0
    );

    const question9 = new Question (
        "What is ordinal theory?",
        ["A theory that proves time is a scalar quantity","Numismatic system for satoshis","Solar system for Bitcoin","A theory that proves aliens exist"],
        1
    );

    const question10 = new Question(
        "How many understand?",
        ["Many","Several","Few","Everybody"],
        2
    );

    await askQuestion(question1.question, question1.answersArray, question1.correctAnswerIndex);
    await askQuestion(question2.question, question2.answersArray, question2.correctAnswerIndex);
    await askQuestion(question3.question, question3.answersArray, question3.correctAnswerIndex);
    await askQuestion(question4.question, question4.answersArray, question4.correctAnswerIndex);
    await askQuestion(question5.question, question5.answersArray, question5.correctAnswerIndex);
    await askQuestion(question6.question, question6.answersArray, question6.correctAnswerIndex);
    await askQuestion(question7.question, question7.answersArray, question7.correctAnswerIndex); 
    await askQuestion(question8.question, question8.answersArray, question8.correctAnswerIndex); 
    await askQuestion(question9.question, question9.answersArray, question9.correctAnswerIndex); 
    await askQuestion(question10.question, question10.answersArray, question10.correctAnswerIndex);
    
    
    console.log(`You got ${totalCorrect} correct!`);

    if (totalCorrect == 10) {
        console.log(chalk.bgGreenBright(chalk.black("Incoming message: You are invited to join the Ordinautz on their mission. This is your password for confirmation: 'Ws are all I collect.'")));
    } else {
        console.log(chalk.bgRed("You need to score 10/10 to venture into space with us."));
    }
    console.log(chalk.bgBlack(chalk.yellow('Thanks for playing!')));
}

if (import.meta.url === `file://${process.argv[1]}`) {
    displayOrdinautzBanner(main);
}