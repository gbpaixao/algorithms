type Bracket = '(' | ')' | '{' | '}' | '[' | ']'
export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false
  const bracketMap: Record<string, Bracket> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const stack: Bracket[] = []
  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char as Bracket); 
    } else {
      const top = stack.pop();
      if (top !== bracketMap[char as Bracket]) return false;
    }
  }
  return stack.length === 0
};