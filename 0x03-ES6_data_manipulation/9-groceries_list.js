/**
 * generates a map of groceries with (name, quality)
 * @author Urom Jehoshaphat Ogbonnia <https://github.com/JehoOgbo>
 * @returns map
 */
export default function groceriesList() {
	const values = [
		['Apples', 10],
		['Tomatoes', 10],
		['Pasta', 1],
		['Rice', 1],
		['Banana', 5],
	]
	return new Map(values);
}
