/**
 * getListStudentIds - Retrieves ids from a list of student objects
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - the list of student objects
 * @author Urom Jehoshaphat Ogbonnia <https://github.com/JehoOgbo>
 * @returns list of ids or empty list
 */
export default function getListStudentIds(students) {
	if (students instanceof Array) {
		return students.map((student) => student.id);
	}
	return [];
}
