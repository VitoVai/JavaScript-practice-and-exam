console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  const drinks = [
    { name: 'lemonade', price: 50 },
    { name: 'lime', price: 10 },
  ];

  function sortDrinkByPrice(firstDrink, secondDrink) {
    return firstDrink.price - secondDrink.price;
  }

  drinks.sort(sortDrinkByPrice);
  console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName (obj, name, value) {
    return {...obj, [name]: value}
  }
  console.log(addName({}, 'Brutus', 300));
  console.log({ piano: 500 }, 'Brutus', 400);
  console.log({ piano: 500, stereo: 300 }, 'Caligula', 440);
}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  const connection = {
    '-3': { m: 'great grandfather', f: 'great grandmother' },
    '-2': { m: 'grandfather', f: 'grandmother' },
    '-1': { m: 'father', f: 'mother' },
    0: { m: 'me!', f: 'me!' },
    1: { m: 'son', f: 'daughter' },
    2: { m: 'grandson', f: 'granddaughter' },
    3: { m: 'great grandson', f: 'great granddaughter' },
  };
  
  function generation(x, y) {
    return connection[x][y];
  }

  console.log(generation(2, 'f'));
  console.log(generation(-3, 'm'));
  console.log(generation(1, 'f'));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i++) {
      const tileObject = tileHand[i];
      const score = tileObject.score;
      sum += score;
    }
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    for (let i = 0; i < tileHand.length; i++) {
      sum += tileHand[i].score;
    }
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    function addToSum(tile) {
      sum += tile.score
    }
    tileHand.forEach(addToSum)
    return sum;
  }

  function maximumScore(tileHand) {
    let sum = 0;
    tileHand.forEach(tile => sum += tile.score)
    return sum;
  }

  function maximumScore(tileHand) {
    return tileHand.reduce((acc, { score }) => acc += score, 0);
  }
  // const maximumScore = tileHand => tileHand.reduce((acc, { score }) => acc += score, 0);

  console.log({
    '28': maximumScore([
      { tile: "N", score: 1 },
      { tile: "K", score: 5 },
      { tile: "Z", score: 10 },
      { tile: "X", score: 8 },
      { tile: "D", score: 2 },
      { tile: "A", score: 1 },
      { tile: "E", score: 1 }
    ]),
    '15': maximumScore([
      { tile: "B", score: 2 },
      { tile: "V", score: 4 },
      { tile: "F", score: 4 },
      { tile: "U", score: 1 },
      { tile: "D", score: 2 },
      { tile: "O", score: 1 },
      { tile: "U", score: 1 }
    ])
  })
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
  function calculateDifference(obj, limit) {
    const valueArray = Object.values(obj);
    let totalValue = 0;
    for (let i = 0; i < valueArray.length; i++) {
      totalValue += valueArray[i];
    }
    return totalValue - limit;
  }
  console.log(calculateDifference({ 'baseball bat': 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
  function toArray(obj) {
    return Object.entries(obj);
  }
  console.log(toArray({ a: 1, b: 2 }));
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(toArray({}));
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
  function inkLevels(inks) {
    return Math.min(...Object.values(inks));
  }
  console.log(
    inkLevels({
      cyan: 23,
      magenta: 12,
      yellow: 10,
    })
  );
  console.log(
    inkLevels({
      cyan: 432,
      magenta: 543,
      yellow: 777,
    })
  );
  console.log(
    inkLevels({
      cyan: 700,
      magenta: 700,
      yellow: 0,
    })
  );
}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
  
}
console.groupEnd();