function isValid(str: string, a: number, b: number, c: number) { // O(n)
  if (str.length - str.replace(/a/g, '').length > a) return false // O(string_length)
  if (str.length - str.replace(/b/g, '').length > b) return false // O(string_length)
  if (str.length - str.replace(/c/g, '').length > c) return false // O(string_length)
  if (str.includes('aaa') || str.includes('bbb') || str.includes('ccc')) return false // O(string_length)
  return true
}

function getLetterPriority(a: number, b: number, c: number): string[] { // O(3log3)
  let letters: Record<'a' | 'b' | 'c', number> = { // O(3)
    'a': a,
    'b': b,
    'c': c
  }
  const letterArray: ('a' | 'b' | 'c')[] = ['a', 'b', 'c'] // O(3)
  return letterArray.sort((a, b) => letters[b] - letters[a]) // O(3log3)
}

export function longestDiverseString(a: number, b: number, c: number): string {
  let result = ''
  let found: string | undefined = ''
  let aux_a = a
  let aux_b = b
  let aux_c = c

  while (found !== undefined) { // O(n)
    result = found // O(1)
    let letterOrder = getLetterPriority(aux_a, aux_b, aux_c) // O(3log3)
    let stack = letterOrder.map((letter) => result.concat(letter)) // O(3)
    found = stack.find((entry) => isValid(entry, a, b, c)) // O(3) + O(n)
    if (found) {
      const selectedLetter = found[found.length - 1]
      if (selectedLetter === 'a') aux_a--
      else if (selectedLetter === 'b') aux_b--
      else if (selectedLetter === 'c') aux_c--
    }
  }
  return result  // O(1)
};

// const result = longestDiverseString(1, 1, 7)
// const result = longestDiverseString(5, 4, 3)
// const result = longestDiverseString(7, 1, 0)
// console.log('result', result)