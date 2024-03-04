function matrixAddition(a, b) {
  const list = [];
  for (let iterable = 0; iterable <= a.length; iterable++) {
    if (a[iterable]) {
      const calc = a[iterable].map((num, index) => num + b[iterable][index]);
      list.push(calc);
    }
  }
  return list;
}

matrixAddition(
  [
    [1, 2, 3, 1],
    [3, 2, 1, 4],
    [1, 1, 1, 2],
  ],
  [
    [2, 2, 1, 1],
    [3, 2, 3, 4],
    [1, 1, 3, 2],
  ]
);

// [1, 2, 3, 1] + [2, 2, 1, 1] = [3,4,4,2]
// [3, 2, 1, 4] + [3, 2, 3, 4] = [6,4,4,8]
// [1, 1, 1, 2] + [1, 1, 3, 2] = [2,2,4,4]