export function minLength(s: string): number {
  const stack: string[] = [];
  for (const char of s) {
    if (stack.length > 0) {
      const lastChar = stack[stack.length - 1];
      if ((lastChar === 'A' && char === 'B') || (lastChar === 'C' && char === 'D')) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length;
}