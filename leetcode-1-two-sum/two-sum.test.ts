import { twoSum } from "./two-sum"

test.each([
  { nums: [5, 7, 3, 2, 11], target: 9, result: [1,3]},
  { nums: [3,2,4], target: 6, result: [1,2]},
  { nums: [3,3], target: 6, result: [0,1]},
])("Two sum nums=$nums", ({nums, target, result}) => {
  const response = twoSum(nums, target)
  expect(response).toEqual(result)
})