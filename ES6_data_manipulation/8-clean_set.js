// This function returns a string of set values starting with a given prefix
// Parameters:
//   - set: a Set of strings
//   - startString: the prefix string to match
// Returns: a string of values (without the prefix), separated by '-'
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });

  return result.join('-');
}
