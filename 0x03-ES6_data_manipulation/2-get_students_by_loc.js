export default function getStudentsByLocation(list, city) {
  const students = list.filter((student) => student.location === city);

  return students;
}
