# 0x02. ES6 classes

## Learning Objectives

- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Tasks

### [0. You used to attend a place like this at some point](./0-classroom.js)

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- It should accept one attribute `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

### [1. Let's make some classrooms](./1-make_classrooms.js)

Import the `ClassRoom` class from `0-classroom.js`. Create three `ClassRoom` objects with the following `maxStudentsSize` values: `19`, `20` and `34`.