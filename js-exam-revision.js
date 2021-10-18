// 1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
//   - name
//   - surname
//   - age
//   - height
//   - weight
//   - sex

const people = [
  {
    name: 'Beplaukis',
    surname: 'Paplaukys',
    age: 83,
    height: 1.20,
    weight: 96,
    sex: 'male',
  },
  {
    name: 'Karolina',
    surname: 'Bekarolė',
    age: 36,
    height: 1.75,
    weight: 58,
    sex: 'female',
  },
  {
    name: 'Gorilius',
    surname: 'Beždžionius',
    age: 29,
    height: 1.51,
    weight: 63,
    sex: 'male',
  },
  {
    name: 'Žemytė',
    surname: 'Pažemytė',
    age: 88,
    height: 1.51,
    weight: 66,
    sex: 'female',
  },
  {
    name: 'Raimonda',
    surname: 'Kaliausytė',
    age: 41,
    height: 1.65,
    weight: 78,
    sex: 'female',
  },
  {
    name: 'Robertas',
    surname: 'Pasmūginis',
    age: 23,
    height: 1.91,
    weight: 89,
    sex: 'male',
  },
  {
    name: 'Povilas',
    surname: 'Krentantis',
    age: 26,
    height: 1.75,
    weight: 65,
    sex: 'male',
  },
  {
    name: 'Laumė',
    surname: 'Raganaitė',
    age: 12,
    height: 1.35,
    weight: 56,
    sex: 'female',
  }
];

console.groupCollapsed('First part');
  
// 2. Panaudojant array.forEach:
console.groupCollapsed('.forEach tasks');
//   - Atspausdinti kiekvieną elementą
people.forEach(p => console.log(p));
//   - Atspausdinti kiekvieno elemento pilną vardą
people.forEach(p => console.log(`${p.name} ${p.surname}`));
//   - Atspausdinti kiekvieno elemento kūno masės indeksą
people.forEach(p => console.log(Math.round(10 * p.weight / (p.height ** 2)) / 10));
console.groupEnd();
// 3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
console.groupCollapsed('.filter tasks');
//   - kurių vardas ilgesnis nei 6 simboliai
const nameLongerThanSix = people.filter(p => p.name.length > 6);
console.log(nameLongerThanSix);
//   - kurių svoris didesnis nei 80kg
const weightOver80 = people.filter(p => p.weight > 80);
console.log(weightOver80);
//   - kurie aukštesni nei 185cm
const higherThan185 = people.filter(p => (p.height * 100) > 185);
console.log(higherThan185);
console.groupEnd();
// 4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
console.groupCollapsed('.map tasks');
//   - ūgius
const heights = people.map(p => p.height);
console.log(heights);
//   - svorius
const weights = people.map(p => p.weight);
console.log(weights);
//   - ūgius, svorius ir amžius : [{height, weight, age}, ...]
const heightWeightAge = people.map(p => {return {height: p.height, weight: p.weight, age: p.age}})
console.log(heightWeightAge)
//   - KMI indeksus
const kmi = people.map(p => Math.round(10 * p.weight / (p.height ** 2)) / 100);
console.log(kmi);
//   - KMI indeksus ir amžius
const kmiAge = people.map(({ age, weight, height }) => ({ kmi: Math.round(10 * weight / (height ** 2)) / 100, age }));
console.log(kmiAge);
console.groupEnd();
// 5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
console.groupCollapsed('.reduce tasks');
//   - svorių vidurkį
const averageWeight = people.reduce((basic, value) => basic+value.weight ,0) / people.length;
console.log(averageWeight);
//   - ūgio vidurkį
const averageHeight = people.reduce((basic, value) => basic+value.height ,0) / people.length;
console.log(averageHeight);
console.groupEnd();
console.groupEnd();

// ------------------------------------ 2 Dalis ------------------------------------ 
console.groupCollapsed('Second part');
// 0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
//     Person klasėje:    
//     - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
//     - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
{
  class Person {
    name;
    surname;
    height;
    weight;
    sex;
    age;

    constructor({ name, surname, height, weight, sex, age }) {
      this.name = name;
      this.surname = surname;
      this.height = height;
      this.weight = weight;
      this.sex = sex;
      this.age = age;
    }

    get bmi() {
      return Math.round(10 * this.weight / (this.height / 100) ** 2) / 10;
    }

    get string() {
      const { name, surname, ...rest } = this;
      const propString = Object.entries(rest)
        .filter(([_, propVal]) => typeof propVal !== 'function')
        .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, '');
      return `${name} ${surname}:` + propString;
    }

    getBMI = () => {
      return Math.round(10 * this.weight / (this.height / 100) ** 2) / 10;
    }

    toString = () => {
      const { name, surname, ...rest } = this;
      return Object.entries(rest)
        .filter(([_, propVal]) => typeof propVal !== 'function')
        .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, `${name} ${surname}:`);
    }
  }

  const peopleArr = people.map(p => new Person(p));

  console.group('0. Pasinaudojant 1 dalies asmens apibūdinimu, sukurti Person klasę, kuri apipavidalina tokio tipo objektą');
  {
    console.table(peopleArr);
    peopleArr.forEach(p => console.log(p.getBMI()));
    // peopleArr.forEach(p => console.log(p.bmi));
    peopleArr.forEach(p => console.log(p.toString()));
    // peopleArr.forEach(p => console.log(p.string));
  }
  console.groupEnd();
// 1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg ');
{
  const result = peopleArr.filter(p => p.sex === 'female' && p.age < 20 && p.weight > 70);
  console.table(result);
}
console.groupEnd();
// 2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
{
  const result = peopleArr.filter(p => p.sex === 'male' && p.age > 25 && p.getBMI() < 18.5);
  console.table(result);
}
console.groupEnd();
// 3. Atrinkti vaikus, su antsvoriu (KMI > 30)
console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
{
  const result = peopleArr.filter(p => p.age < 18 && p.getBMI() > 30);
  console.table(result);
}
console.groupEnd();

// 4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
{
  const result = peopleArr.filter(p => p.age >= 65 && p.getBMI() > 30);
  console.table(result);
}
console.groupEnd();
// 5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]




  console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
    const result = peopleArr.filter(p => {
      const bmi = p.getBMI();
      return bmi < 18.5 || bmi > 25;
    });
    console.table(result);
  }
  console.groupEnd();
}
console.groupEnd();
console.groupEnd();
// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video: 
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas