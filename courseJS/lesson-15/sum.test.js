const sum = require('./script.js');

test('Sum', () => {
  expect(sum(2, 2)).toBe(false);
});
// const each = require('./script.js');

// test('each', () => {
//   expect(each(arr, myFunc)).toBe(array);
//   expect(each(arr, myFunc)).toEqual(1);
// });