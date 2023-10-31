function matrixAddition(a, b) {
  let aArrList = [];
  let bArrList = [];
  let sumA = [];
  let sumB = [];
  let arrayOfSum = [];

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
    arrayOfSum.push(sumNumbers);
  }

  for (let index = 0; index <= arrayOfSum.length; index++) {
    const slice = arrayOfSum.slice(0,aArrList[0].length);
    console.log(slice);
  }

  return {
    res: arrayOfSum,
  };
}

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
      [1, 1, 3],
    ]
  )
);
