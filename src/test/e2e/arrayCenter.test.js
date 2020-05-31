/* eslint-disable no-undef */
const {
  arraySumFromRight,
  arraySumFromLeft,
  arrayCenterIndex,
} = require('./arrayHelpers');

describe('array center', () => {
  test('returned index 5 for array [10, 15, 5, 7, 1, 24, 36, 2]', () => {
    const result = arrayCenterIndex(
      arraySumFromRight([10, 15, 5, 7, 1, 24, 36, 2]),
      arraySumFromLeft([10, 15, 5, 7, 1, 24, 36, 2]),
      [10, 15, 5, 7, 1, 24, 36, 2],
    );
    expect(result).toBe(4);
  });

  test('returned index 5 for array [ 23, 50, 63, 90, 10, 30, 155, 23, 18 ]', () => {
    const result = arrayCenterIndex(
      arraySumFromRight([23, 50, 63, 90, 10, 30, 155, 23, 18]),
      arraySumFromLeft([23, 50, 63, 90, 10, 30, 155, 23, 18]),
      [23, 50, 63, 90, 10, 30, 155, 23, 18],
    );
    expect(result).toBe(4);
  });
});
