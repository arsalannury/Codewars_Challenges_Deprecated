function matrixAddition(a, b) {
  let aArrOutIndex = 0;
  let bArrOutIndex = 0;
  let aArrList = [];
  let bArrList = [];
  let sumA = [];
  let sumB = [];
  let result = [];

  // while (aArrOutIndex < a.length) {
  //   aArrList.push(a[aArrOutIndex]);
  //   aArrOutIndex++;
  // }
  // while (bArrOutIndex < b.length) {
  //   bArrList.push(b[bArrOutIndex]);
  //   bArrOutIndex++;
  // }

  for (let index = 0; index < a.length; index++) {
    aArrList.push(a[index]);
    bArrList.push(b[index]);
  }

  for (let index = 0; index < a.length; index++) {
    aArrList[index].map((itemA) => {
      sumA.push(itemA);
    });
    bArrList[index].map((itemB) => {
      sumB.push(itemB);
    });
  }

  for (let index = 0; index < sumA.length; index++) {
    let sumNumbers = sumA[index] + sumB[index];
    result.push(sumNumbers);
  }

  return {
    // a: aArrList,
    // b: bArrList,
    // aa: sumA,
    // bb: sumB,
    res: result,
  };
}

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
