export const weakMap = new WeakMap();

// Path: 0x03-ES6_data_manipulation/101-set.js
export function queryAPI(endpoint) {
  let called = 0;
  if (weakMap.has(endpoint)) {
    called = weakMap.get(endpoint);
  }
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) {
    throw Error('Endpoint load is high');
  }
}
