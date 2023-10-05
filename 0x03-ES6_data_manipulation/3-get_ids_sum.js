export default function getStudentIdsSum(list) {
  const initialValue = 0;
  const students = list.reduce((acc, current) => acc + current.id, initialValue);
  return students;
}
