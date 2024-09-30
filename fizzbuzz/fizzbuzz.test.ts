import { fizzBuzz } from "./fizzbuzz"

test.each([
  { n: 3, result: ["1","2","Fizz"]},
  { n: 5, result: ["1","2","Fizz","4","Buzz"]},
  { n: 15, result: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]}
])("Test fizzbuzz n=$n", ({n, result}) => {
  const response = fizzBuzz(n)
  expect(response).toEqual(result)
})