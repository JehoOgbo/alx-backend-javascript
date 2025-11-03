/**
 * getStudentsByLocation - returns an array of objects located in a given city
 * @students - list of student objects
 * @city - city to be used for filter
 * @author Urom Jehoshaphat Ogbonnia <https://github.com/JehoOgbo>
 * @returns list of student objects with the given locations
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
