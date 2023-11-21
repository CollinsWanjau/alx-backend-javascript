#!/usr/bin/env node
// Create a function named countStudents. It should accept a path in argument
// The script should attempt to read the database file synchronously
// If the database is not available, it should throw an error with the text Cannot load the database
// eslint-disable-next-line max-len
// If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
// eslint-disable-next-line max-len
// It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
// CSV file can contain empty lines (at the end) - and they are not a valid student!
const fs = require('fs');

function countStudents (path) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.toString().split('\n');
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        length += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const l = length - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(',')}`);
      }
    }
  } catch (err) {
    throw Error('Cannot load the database');
  }
}
module.exports = countStudents;
