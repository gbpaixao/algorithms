import { arrayRankTransform } from "./index"

test.each([
  { nums: [40,10,20,30], result: [4,1,2,3]},
  { nums: [100,100,100], result: [1,1,1]},
  { nums: [37,12,28,9,100,56,80,5,12], result: [5,3,4,2,8,6,7,1,3]},
])("Rank Transform of an Array nums=$nums", ({nums, result}) => {
  const response = arrayRankTransform(nums)
  expect(response).toEqual(result)
})