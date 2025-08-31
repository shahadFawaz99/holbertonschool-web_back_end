// This function updates student grades by city
// Parameters:
//   - students: array of student objects
//   - city: string to filter students by location
//   - newGrades: array of objects { studentId, grade }
// Returns: array of students in the city with an added "grade" field
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((g) => g.studentId === student.id);
      return {
        ...student,
        grade: foundGrade ? foundGrade.grade : 'N/A',
      };
    });
}
