export default function getStudentIdsSum(getListStudents) {
  if (Array.isArray(getListStudents)) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return getListStudents.map((student) => student.id).reduce(reducer);
  }
  return [];
}
