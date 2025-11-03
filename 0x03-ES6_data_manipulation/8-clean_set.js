/**
 * gets all values starting with a specific string
 * @param set: Set
 * @param startString: String
 * @returns Sring
 */
export default function cleanSet(set, startString) {
	if (startString === '') {
		return '';
	}
	const stringer = [];
	for (const element of set) {
		if (element.startsWith(startString)) {
			stringer.push(element.replace(startString, ''));
		}
	}
	return stringer.join('-');
}
