export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longestSequenceCount = 0;
  for (let num of nums) {
    // Only start a sequence if num - 1 is not in the set
    if (set.has(num - 1)) continue
    let currentNum = num;
    let currentSequenceCount = 1;
    // Incrementally build the sequence
    while (set.has(currentNum + 1)) {
      currentNum += 1;
      currentSequenceCount += 1;
    }
    longestSequenceCount = Math.max(longestSequenceCount, currentSequenceCount);
  }
  return longestSequenceCount;
}
