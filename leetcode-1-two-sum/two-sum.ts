function twoSum(nums: number[], target: number): number[] {
  const numToIndex: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i]; // Return the indices
    }
    numToIndex.set(nums[i], i); // Store the index of the current number
  }
  throw new Error("No two sum solution found"); // Edge case, should not occur
}

const response = twoSum([5, 7, 3, 2, 11], 9)
console.log('response', response)