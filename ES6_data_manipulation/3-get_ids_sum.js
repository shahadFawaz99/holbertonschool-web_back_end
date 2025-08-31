// This function returns the sum of all student IDs
// It takes an array of student objects as parameter
// Uses reduce to accumulate the sum of ids
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
