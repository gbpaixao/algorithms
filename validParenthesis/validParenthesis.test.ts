import { isValid } from "./validParenthesis"

test.each([
  { string: "()", result: true },
  { string: "([)", result: false },
  { string: "()[]{}", result: true },
  { string: "(]", result: false },
  { string: "([])", result: true },
])("Test validParenthesis string=$string", ({ string, result }) => {
  const response = isValid(string)
  expect(response).toBe(result)
})