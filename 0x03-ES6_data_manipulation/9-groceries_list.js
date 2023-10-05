export default function groceriesList() {
  const finalMap = new Map();
  const array = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const list = Array.from(Object.keys(array));

  list.map((item) => finalMap.set(item, array[item]));
  return finalMap;
}
