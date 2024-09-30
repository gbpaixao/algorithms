export function fizzBuzz(n: number): string[] {
  const response: string[] = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) response.push('FizzBuzz')
      else response.push('Fizz')
    } else if (i % 5 === 0) response.push('Buzz')
    else response.push(String(i))
  }
  return response
};
