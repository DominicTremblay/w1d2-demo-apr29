# w1d2-demo-apr29

## How to Approach Problem Solving

- List the steps in order to solve a problem. Not thinking the syntax.
- Incremental development - step-by-step process

  Rinse and repeat:

  1. State the hypothesis
  2. Verify the hypothesis
  3. changes

- Breaking down a complex problem into smaller more manageable problems
- Getting errors is part of the process - debugging
- EDD - Error driven development

## Problem to solve

Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

## How to Solve This Challenge

- Steps. what is the algorithm?

### What is an Algorithm

- Put simply an algorithm is a **series of steps to solve a problem**

- A more formal definition:

> "An algorithm is a _sequence of unambiguous instructions_ for _solving a problem_, i.e., for obtaining a required _output_ for any _legitimate input_ in a _finite amount of time._" -- _Anany Levitin_

- Sequence of unambiguous instructions

  - Humans use abstractions for almost everything (Grabing a coffee, go to work, etc)
  - Computers needs to be told every detailed steps in order to do something. These steps need to be precise.

- Solving a Problem

  - Am I solving the right problem?
  - Do I truly understand the problem

- Obtaining the required output

  - Am I getting the right solution? Does it solved the problem?

- Any legitimate input

  - Am I dealing with the right input?
  - Does it work with a different set of data?

- A finite amount of time

  - Can the solution be found in a reasonable amount of time

### Write the Pseudo-code

- Write the steps in english to get to the solution

### Debug Strategies

1- use console.log to understand what's going on

- use labels, separate multiple values with commas

2- Use the Node Inspector to Debug in Chrome > node --inspect-brk sum.js and go to chrome://inspect

- Play in Node REPL
- Play in another REPL such as Repl/it

3- Text Editor Integration

- You can debug in VS Code...

### Improve the Solution

- Refactor the code

  - Readability
  - Modularity
  - Catch errors
