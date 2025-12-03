# 0x05-Node_JS_basic

Learn to do server-side javascript using node

### Executing basic javascript with Node JS

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

File: [console.js](./console.js)

### Using Process stdin

Create a program named `1-stdin.js` that will be executed through command line:

- It should display the message Welcome to ALX, what is your name? (followed by a new line)
- The user should be able to input their name on a new line
- The program should display Your name is: INPUT
- When the user ends the program, it should display This important software is now closing (followed by a new line)

**Requirements:**

- Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js 
Welcome to ALX, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to ALX, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```

File: [1-stdin.js](./1-stdin.js)
