console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  function getFirstElement(arr) {
    return arr[0];
    //'Jonas' index = [0];
  }

  const names = ['Jonas', 'Petras', 'Steponas'];
  console.log({
    names,
    result: getFirstElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  function removeFirstElement(arr) {
    return arr.shift();
    //.shift = pašalina pirmą masyvo elementą ir jį grąžina;
  }

  const names = ['Jonas', 'Petras', 'Steponas'];
  console.log({
    names,
    result: removeFirstElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  function getLastElement(arr) {
    return arr[arr.length - 1];
  }

  const names = ['Jonas', 'Petras', 'Steponas'];
  console.log({
    names,
    result: getLastElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function removeLastElement(arr) {
    return arr.pop();
    //.pop = pašalina paskutinį masyvo elementą ir jį grąžina;
  }

  const names = ['Jonas', 'Petras', 'Steponas'];
  console.log({
    names,
    result: removeLastElement(names)
  });
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function getArrElementCount(arr) {
    return arr.length
    // arr.length = grąžina elementų kiekį masyve;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log({
    numbers,
    result: getArrElementCount(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function getArrLastElementIndex(arr) {
    return arr.length - 1;
    // arr.length -1 = 6, nes iš viso yra 7 elementai, indeksai skaičiuojami nuo 0, todėl skaičiaus 7 indeksas bus vieneteu mažiau - 6;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log({
    numbers,
    result: getArrLastElementIndex(numbers)
  });
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function printArrIndexesRows(array) {
    for (let k = 0; k < array.length; k++) {
      console.log(k);
    }
  }

  printArrIndexesRows([4, 5, 6, 7]);
  printArrIndexesRows(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  function printArrElementsRows(array) {
    for (let k = 0; k < array.length; k++) {
      console.log(array[k]);
    }
  }

  printArrElementsRows([4, 5, 6, 7]);
  printArrElementsRows(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
// [3] => reikšmė
{
  function printArrIndexesAndElements(arr) {
    for (let k = 0; k < arr.length; k++) {
      console.log(`[${k}] => ${arr[k]}`);
    }
  }

  printArrIndexesAndElements([4, 5, 6, 7]);
  printArrIndexesAndElements(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function printArrElementsRowsReverse(array) {
    for (let k = array.length - 1; k >= 0; k--) {
      console.log(array[k]);
    }
  }

  printArrElementsRowsReverse([4, 5, 6, 7]);
  printArrElementsRowsReverse(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printArrElementIndexesInline(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += i + ', ';
    }
    result = result.slice(0, -2);
    console.log(result);
  }
  printArrElementIndexesInline([4, 5, 6, 7]);
  printArrElementIndexesInline(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function printArrElementsInline(arr) {
    console.log('[' + arr.join(', ') + ']');
  }

  printArrElementsInline([4, 5, 6, 7]);
  printArrElementsInline(['Labas', 'aš', 'Kauno', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  function printArrElementsFormattedInline(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(`[${i}]=>${arr[i]}`);
    }
    console.log(result.join(' '));
  }
  printArrElementsFormattedInline([4, 5, 6, 7]);
  printArrElementsFormattedInline(['labas', 'as', 'krabas', '!']);
}
console.groupEnd();