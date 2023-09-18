function containerWithMostWater(heights) {
  let maximum = 0;
  let firstpointer = 0;
  let lastpointer = heights.length - 1;
  while (firstpointer < lastpointer) {
    let width = lastpointer - firstpointer;
    let height = Math.min(heights[firstpointer], heights[lastpointer]);
    let area = width * height;
    maximum = Math.max(maximum, area);

    if (heights[firstpointer] < heights[lastpointer]) {
      firstpointer += 1;
    } else {
      lastpointer -= 1;
    }
  }
  return maximum;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(height));
