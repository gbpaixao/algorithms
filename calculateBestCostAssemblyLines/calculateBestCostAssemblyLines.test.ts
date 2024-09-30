import { calculateBestCostAssemblyLines } from "./calculateBestCostAssemblyLines"

test.each([
  { a: [1, 6, 2], b: [3, 2, 5], x: 2, y: 1, result: 8},
  { a: [1, 10, 1], b: [10, 1, 10], x: 1, y: 5, result: 9},
  { a: [8, 3, 3], b: [6, 1, 10], x: 4, y: 3, result: 13},
  { a: [2, 11, 4, 4], b: [9, 2, 5, 11], x: 8, y: 4, result: 21},
])("Test calculateBestCostAssemblyLines a=$a b=$b x=$x y=$y", ({a, b, x, y, result}) => {
  const response = calculateBestCostAssemblyLines(a, b, x, y)
  expect(response).toBe(result)
})