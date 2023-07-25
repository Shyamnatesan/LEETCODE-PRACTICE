function search(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (array[middle] === target) {
      return true;
    } else if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return false;
}

function searchMatrix(matrix, target) {
  const n = matrix.length;
  const m = matrix[0].length;
  if (target < matrix[0][0]) return false;
  for (let i = 0; i < n; i++) {
    if (target === matrix[i][m - 1]) {
      return true;
    } else if (target < matrix[i][m - 1]) {
      return search(matrix[i], target);
    }
  }
  return false;
}

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 13;
console.log(searchMatrix(matrix, target));
