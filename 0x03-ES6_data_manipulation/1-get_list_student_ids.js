export default function getListStudentIds(names) {
  if (!Array.isArray(names)) return [];

  const studentsid = names.map((obj) => obj.id);

  return studentsid;
}
