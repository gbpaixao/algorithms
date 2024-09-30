// Find the smallest missing positive int in array. 
// Ex: [-2, 6, 4, 5, 7, -1, 1, 3, 6, -2, 9, 10, 2, 2] should return 8
export function getSmallestIntNotInArray(A: number[]) {
  let min = 1;
  while (A.indexOf(min) != -1) {
    min++;
  }
  return min;
}