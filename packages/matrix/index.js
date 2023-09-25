/**
 * @description 原地旋转矩阵
 * @param {number[][]} matrix 
 */
function rotate(matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n - 1 - i][n - 1 - j]
      matrix[n - 1 - i][n - 1 -j] = matrix[j][n - 1 -i]
      matrix[j][n - 1 -i] = temp
    }
  }
}
