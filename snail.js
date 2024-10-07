function suboptimal(array) {
  var res = [];
  while (array.length) {
    res.push(...array.shift());
    array.map((row) => res.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return res;
}

function optimal(array) {
  if (array.length == 0 || array[0].length == 0) return [];

  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    startRow++;

    for (let row = startRow; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    endCol--;

    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(array[endRow][col]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(array[row][startCol]);
      }
      startCol++;
    }
  }
  return result;
}
