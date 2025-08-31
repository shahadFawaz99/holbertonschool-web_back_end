// This function checks if all values from an array exist in a given set
// Parameters:
//   - set: a Set object
//   - array: an array of values to check
// Returns: true if all array values are in the set, otherwise false
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
