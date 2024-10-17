export function arrayRankTransform(arr: number[]): number[] {
  const sortedArr = [...arr].sort((a,b) => a-b) // nlog(n)
  const hashmap = new Map() // 1
  const result = [] // 1
  let j = 1 // 1
  for (let i = 0; i < arr.length; i++) { // n
    if (!hashmap.has(sortedArr[i])) { // 1
      hashmap.set(sortedArr[i], j) // 1
      j++ // 1
    }
  }
  for (let i = 0; i < arr.length; i++) { // n
    result.push(hashmap.get(arr[i])) // 1
  }
  return result // 1
};