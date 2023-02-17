module.exports = function towelSort(matrix) {
  let result = [];
  if (arguments.length == 0 || matrix.length == 0) {
    return result;
  } else {
    for (i = 0; i < matrix.length; i++) {
      const innerAray = matrix[i];
      if (i % 2) {
        innerAray.reverse()
      }
      for (j = 0; j < innerAray.length; j++) {
        const num = innerAray[j];
        result.push(num)
      }
    }
    return result;
  }
}




