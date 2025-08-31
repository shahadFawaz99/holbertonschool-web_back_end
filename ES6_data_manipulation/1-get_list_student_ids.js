// This function returns an array of student IDs from a list of student objects
// If the input is not an array, it returns an empty array
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
