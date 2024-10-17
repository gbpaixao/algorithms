import { longestConsecutive } from "./index"

test.each([
  { nums: [100, 4, 200, 1, 3, 2], result: 4},
  { nums: [0,3,7,2,5,8,4,6,0,1], result: 9},
])("Longest Consecutive Sequence nums=$nums", ({nums, result}) => {
  const response = longestConsecutive(nums)
  expect(response).toEqual(result)
})