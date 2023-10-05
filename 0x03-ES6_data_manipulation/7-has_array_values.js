export default function hasValuesFromArray(set, array) {
  let verdict = true;
  array.map((elem) => {
    if (!set.has(elem)) {
      return verdict = false;
    }
  });
  return verdict;
}
