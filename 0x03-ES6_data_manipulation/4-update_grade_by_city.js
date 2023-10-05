export default function updateStudentGradeByCity(list, city, newGrades) {
  const gradesMap = {};
  newGrades.forEach((gradeObj) => {
    gradesMap[gradeObj.studentId] = gradeObj.grade;
  });

  const students = list.filter((student) => student.location === city);
  const studentsGrades = students.map((student) => {
    const newGrade = gradesMap[student.id];
    return { ...student, grade: newGrade !== undefined ? newGrade : 'N/A' };
  });

  return studentsGrades;
}
