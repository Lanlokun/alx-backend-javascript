export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (Array.isArray(getListStudents)) {
    const students = getListStudents.filter((student) => student.location === city);
    const studentsIds = students.map((student) => student.id);
    const newStudents = studentsIds.map((id, index) => {
      const student = students[index];
      const newGrade = newGrades.filter((grade) => grade.studentId === id);
      if (newGrade.length === 0) {
        return { ...student, grade: 'N/A' };
      }
      return { ...student, grade: newGrade[0].grade };
    });
    return newStudents;
  }
  return [];
}
