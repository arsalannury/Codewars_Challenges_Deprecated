function matrixAddition(a, b) {
  let aArrOutIndex = 0;
  let bArrOutIndex = 0;
  let aArrList = [];
  let bArrList = [];

  while (aArrOutIndex < a.length) {
    aArrList.push(a[aArrOutIndex]);
    aArrOutIndex++;
  } 
  while (bArrOutIndex < b.length) {
    bArrList.push(b[bArrOutIndex]);
    bArrOutIndex++;
  }

  for (let index = 0; index < a.length; index++) {
    aArrList[index].map(item => {
      bArrList[index].map(itemb => {
        console.log(item, "item");
        console.log(itemb, "itemb");
          })
        })   
  }

  return {
    a: aArrList,
    b: bArrList
  }

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

