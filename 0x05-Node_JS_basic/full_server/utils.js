
// It should read the database asynchronously
// It should return a promise
// When the file is not accessible, it should reject the promise with the error
// When the file can be read, it should return an object of arrays of the firstname of students per fields
const fs = require('fs');
// const { resolve } = require('path');

// This means that the function should not block the execution of other code while it is reading the database.
// it should use a mechanism such as callbacks, promises, or async/await to handle the completion or failure of the database operation
//  A promise is an object that represents the eventual outcome of an asynchronous operation. A promise can either be resolved (with a value) or rejected (with an error).
// firstname,lastname,age,field
// Johann,Kerbrou,30,CS
// Guillaume,Salou,30,SWE
// Arielle,Salou,20,CS
// Jonathan,Benou,30,CS
// Emmanuel,Turlou,40,CS
// Guillaume,Plessous,35,CS
// Joseph,Crisou,34,SWE
// Paul,Schneider,60,SWE
// Tommy,Schoul,32,SWE
// Katie,Shirou,21,CS

// Define an async function that takes a path to a database file as a parameter
async function readDatabase(path) {
  // Declare the variable to store the data
  let data;
  try {
    // Pauses the program until the promise is fullfilled
    // Read the file using the fs module and store the data as a string
    data = await fs.promises.readFile(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load a new database');
  }
  // splits the data by line breaks and commas, and creates a set of unique fields.
  // Map each line to an array of values seperated by commas
  // Map each array to an object with properties for firstname etc
  const students = data.split('\r\n').slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstname: student[0],
      lastname: student[1],
      age: student[2],
      field: student[3],
    }));
  // Map each student object to its field
  const fields = students.map((student) => student.field);
  // Create a new set of unique fields
  const uniqueFields = new Set(fields);
  // Declare an empty object to store the students by field
  const studentsByField = {};
  // Loop through the unique fields and create an empty array for each field
  // of the object
  for (const field of uniqueFields) {
    studentsByField[field] = [];
  }
  // Loop through the students and push their first names into the corresponding
  // array in the object
  for (const student of students) {
    studentsByField[student.field].push(student.firstname);
  }
  // Log the object into the console
  console.log(studentsByField);
  // Return the object
  return studentsByField;
}

module.exports = readDatabase;
