/**
 * checks if all the elements in an array exist within the set
 * @param mySet: Set
 * @param myArray: Array
 * @returns Boolean
 */
export default function hasValuesFromArray(mySet, myArray) {
	if (mySet.isSupersetOf(new Set(myArray))) {
		return true;
	}
	return false;
}
