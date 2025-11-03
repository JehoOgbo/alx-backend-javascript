/**
 * getStudentIdsSum - returns the sum of all student ids
 * @params:
 *  @students: list of student objects
 * @returns: the sum of all student ids
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((acc, student) => acc + student.id, 0);
  }
  return 0;
}
