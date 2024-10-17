import { minLength } from "./index"

test.each([
  { s: "ABFCACDB", result: 2},
  { s: "ACBBD", result: 5},
])("Minimum String Length After Removing Substrings nums=$nums", ({s, result}) => {
  const response = minLength(s)
  expect(response).toBe(result)
})