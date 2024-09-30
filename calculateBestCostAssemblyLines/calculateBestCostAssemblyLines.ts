/**
 * Calculate the best cost (either staying on the same line or switching between A and B)
 * 
 * const A = [2, 11, 4, 4] // line A 
 * const B = [9, 2, 5, 11] // line B 
 * const X = 8 // cost from going from A to B 
 * const Y = 4 // cost from going from B to A
 * 
 * Result: 21 (stay on A)
 */
export function calculateBestCostAssemblyLines(A: number[], B: number[], X: number, Y: number) {
  const n = A.length;
  const costA: number[] = [A[0]]
  const costB: number[] = [B[0]]

  for (let i = 1; i < A.length; i++) {
    const stayOnA = costA[i - 1] + A[i]
    const switchFromB = costB[i - 1] + A[i] + Y
    costA[i] = Math.min(stayOnA, switchFromB);

    const stayOnB = costB[i - 1] + B[i]
    const switchFromA = costA[i - 1] + B[i] + X
    costB[i] = Math.min(stayOnB, switchFromA);
  }
  return Math.min(costA[n - 1], costB[n - 1])
}