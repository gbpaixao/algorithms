import { longestDiverseString } from "./index"

test.each([
  { a: 1, b: 1, c: 7, result: ["ccaccbcc", "ccbccacc"]},
  { a: 7, b: 1, c: 0, result: ["aabaa"]},
  { a: 5, b: 4, c: 3, result: ["aababcabcabc"]},
])("Longest diverse string a=$a b=$b c=$c", ({a, b, c, result}) => {
  const response = longestDiverseString(a, b, c)
  expect(result.includes(response)).toBe(true)
})