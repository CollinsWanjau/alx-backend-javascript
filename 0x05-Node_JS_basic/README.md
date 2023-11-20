# 0x05. NodeJS Basics

Back-end
JavaScript
ES6
NodeJS
ExpressJS

## Learning Objectives

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
- create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

## Tasks

### [0. Executing basic javascript with Node JS](./0-console.js)

In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

### [1. Using Process stdin](./1-stdin.js)

Create a program named 1-stdin.js that will be executed through command line:

- It should display the message Welcome to Holberton School, what is your name? (followed by a new line)
- The user should be able to input their name on a new line
- The program should display Your name is: INPUT (followed by a new line)
- When the user ends the program, it should display This important software is now closing (followed by a new line)

- Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js 
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```