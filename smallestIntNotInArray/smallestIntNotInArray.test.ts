import { getSmallestIntNotInArray } from "./smallestIntNotInArray"

test.each([
  { array: [1, 5, 3], result: 2 },
  { array: [3, 5, 1], result: 2 },
  { array: [2, 4, 1], result: 3 },
  { array: [1, 1, 2, 1, 3, 1, 1, 5], result: 4 },
  { array: [-2, 6, 4, 5, 7, -1, 1, 3, 6, -2, 9, 10, 2, 2], result: 8 }
])("Test smallestIntNotInArray array=$array", ({ array, result }) => {
  const response = getSmallestIntNotInArray(array)
  expect(response).toBe(result)
})