// This function filters students by their location
// It takes two parameters:
//   - students: an array of student objects
//   - city: a string representing the city to filter by
// It returns a new array of students located in the given city
export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
