/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let verdict = true;
  array.map((elem) => {
    if (!set.has(elem)) {
      verdict = false;
    }
  });
  return verdict;
}
