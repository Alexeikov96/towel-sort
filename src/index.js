module.exports = function towelSort (matrix) {
  if (!matrix || matrix[0] == null) {
    return []
  } else {
    for (i = 1; i <= matrix.length; i += 2) {
      matrix[i] = matrix[i].reverse()
    }
    return matrix.join().split(',')
  }
  
}

/* const matrix1 = [];
console.log(towelSort(matrix1)) */
