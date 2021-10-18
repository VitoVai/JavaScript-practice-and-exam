// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrBy2(arr) {
    return arr.map((v) => 2 * v);
  //   const result = [];
  //   const elementCount = array.length;
  //   for (let index = 0; index < elementCount; index++) {
  //     const currentElement = array[index];
  //     const currentElementDoubled = currentElement * 2;
  //     result.push(currentElementDoubled);
  //   }
  //   return result;
  // }
  // function mulArrBy2(arr) {
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] * 2);
  //   }
  //   return result;
  }
  console.log({
    numbers,
    result: mulArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    return arr.map((v) => v * v);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] ** 2);
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: powerArrBy2(numbers),
  //   result2: numbers.map(x => x ** 2)
  // });
  }
  console.log({
    numbers,
    result: powerArrBy2(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    return arr.map((v, i) => v * i);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] * i);
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: mulArrElementsByIndex(numbers),
  //   result2: numbers.map((x, i) => x * i)
  // });
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    return arr.filter((v) => v > 0);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] > 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterPositives(numbers),
  //   result2: numbers.filter(x => x > 0)
  // });
    }
    console.log({
      numbers,
      result: filterPositives(numbers)
    });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    return arr.filter((v) => v < 0);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] < 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterNegatives(numbers),
  //   result2: numbers.filter(x => x < 0)
  // });
  }
  console.log({
    numbers,
    result: filterNegatives(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    return arr.filter((v) => v % 2 === 0);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterEquals(numbers),
  //   result2: numbers.filter(x => x % 2 === 0)
  // });
  }
  console.log({
    numbers,
    result: filterEquals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    return arr.filter((v) => v % 2 == 1);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 1) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterOdds(numbers),
  //   result2: numbers.filter(x => x % 2 === 1)
  // });
  }
  console.log({
    numbers,
    result: filterOdds(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    return arr.map((v) => Math.abs(v));
    //   const result = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     result.push(arr[i] < 0 ? arr[i] * -1 : arr[i]);
    //     // result.push(Math.abs(arr[i]));
    //   }
    //   return result;
    // }
  
    // function arrNegativesMadePositives(arr) {
    //   const result = [];
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < 0) {
    //       result.push(arr[i] * -1);
    //     }
    //   }
    //   return result;
    // }
  
    // console.log('---');
    // console.log({
    //   numbers,
    //   resultAll: arrAbsoluteValues(numbers),
    //   resultAll2: numbers.map(x => x < 0 ? x * -1 : x),
    //   resultAll3: numbers.map(Math.abs),
    //   resultNegativesMadePositive: arrNegativesMadePositives(numbers),
    //   resultNegativesMadePositive2: numbers.filter(x => x < 0).map(x => x * -1),
    //   resultNegativesMadePositive3: numbers.filter(x => x < 0).map(Math.abs),
    //   resultNegativesMadePositive4: numbers.reduce((res, x) => x < 0 ? [...res, x * -1] : res, []),
    // });
  }

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers)
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    return arr.map((v, i) => Math.pow(v, i));
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i] ** i);
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: powArrElementsByIndex(numbers),
  //   result2: numbers.map((x, i) => x ** i),
  // });
  }
  console.log({
    numbers,
    result: powArrElementsByIndex(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    return arr
      .filter((v) => v > 0)
      .filter((v) => (v == Math.round(v)));
  //     const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     // if (arr[i] % 1 === 0 && arr[i] > 0) {
  //     if (Number.isInteger(arr[i]) && arr[i] > 0) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterNaturals(numbers),
  //   result2: numbers.filter(x => Number.isInteger(x) && x > 0)
  // });
  }
  console.log({
    numbers,
    result: filterNaturals(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  function absArrElements(arr) {
    return arr.map((v) => Math.round(v));
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     // const remainder = arr[i] % 1;
  //     // const whole = arr[i] - remainder;

  //     // result.push(
  //     //   remainder > 0.5 ?
  //     //     whole < 0
  //     //       ? whole - 1
  //     //       : whole + 1
  //     //     : whole
  //     // );
  //     result.push(Math.round(arr[i]));
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: absArrElements(numbers),
  //   result2: numbers.map(Math.round)
  // });
  }
  console.log({
    numbers,
    result: absArrElements(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    return arr.filter((v, i) => i % 2 === 1);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i += 2) {
  //     result.push(arr[i])
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterEverySecond(numbers),
  //   result2: numbers.filter((_, i) => i % 2 === 0)
  // });
  }
  console.log({
    numbers,
    result: filterEverySecond(numbers)
  });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
    return arr.filter((v, i) => i % 5 === 4);
  //   const result = [];
  //   for (let i = 0; i < arr.length; i += 5) {
  //     result.push(arr[i]);
  //   }
  //   return result;
  // }
  // console.log({
  //   numbers,
  //   result: filterEveryFifth(numbers),
  //   result2: numbers.filter((_, i) => i % 5 === 0)
  // });
  }
  console.log({
    numbers,
    result: filterEveryFifth(numbers)
  });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    arr.forEach((v, i) => console.log(`[${i}] => ${v}`));
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(`[${i}] => ${arr[i]}`);
  //   }
  // }
  // function printArr(arr) {
  //   arr.forEach((x, i) => console.log(`[${i}] => ${x}`));
  }
  printArr(numbers);
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    return arr.reduce((sum, v) =>  sum + v);
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum;
  // }

  // console.log({
  //   numbers,
  //   result: sumArr(numbers),
  //   result2: numbers.reduce((sum, x) => sum + x)
  // });
  }

  console.log({
    numbers,
    result: sumArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    return arr.reduce((sum, v) =>  sum + v) / arr.length
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }
  //   return sum / arr.length;
  // }

  // console.log({
  //   numbers,
  //   result: avgArr(numbers),
  //   result2: numbers.reduce((sum, x) => sum + x) / numbers.length,
  //   result3: numbers.reduce((avg, x) => avg + x / numbers.length, 0),
  // });
  }

  console.log({
    numbers,
    result: avgArr(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {
    return arr.reduce((max, v) => Math.max(max, v));
    // for (let i = 1; i < arr.length; i++) {
    //   if(arr[i] > max){
    //     max = arr[i];
    //   }
    // }
    // return max;
  }

  console.log({
    numbers,
    result: arrMax(numbers)
  });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    return arr.reduce((min, v) => Math.min(min, v));
    // let min = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //   if(arr[i] < min){
    //     min = arr[i];
    //   }
    // }
    // return min;
  }

  console.log({
    numbers,
    result: arrMin(numbers)
  });
}
console.log('---');
console.groupEnd();
