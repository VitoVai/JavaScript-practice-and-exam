const data = [
  { brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['diesel'], price: 800 },
  { brand: 'Tesla', model: 'Model 3', year: 2016, color: 'black', fuelTypes: ['electric'], price: 22000 },
  { brand: 'Toyota', model: 'Avensis', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 13000 },
  { brand: 'Audi', model: 'A6', year: 2015, color: 'black', fuelTypes: ['diesel', 'electric'], price: 14000 },
  { brand: 'Audi', model: 'A5', year: 2015, color: 'red', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2019, color: 'black', fuelTypes: ['petrol'], price: 17000 },
  { brand: 'Audi', model: 'R8', year: 2017, color: 'black', fuelTypes: ['petrol',], price: 15000 },
  { brand: 'Tesla', model: 'Model S', year: 2020, color: 'blue', fuelTypes: ['electric'], price: 38000 },
  { brand: 'Subaru', model: 'Impreza', year: 2010, color: 'green', fuelTypes: ['diesel', 'electric'], price: 6000 },
];
const usd_eur = 1.16;
/*
  SKIRTINGAS KONSTRUKTORIAUS VEIKIMAS PAGAL PARAMETRŲ TIPĄ - google.lt: 'function orverloading JS'
  class Car {
    static #constructorParams = ['brand', 'model', 'year', 'color', 'fuelTypes', 'price'];

    constructor(...args) {
      if (typeof args[0] === 'object')
        Car.#constructorParams.forEach(name => this[name] = args[0][name]);
      else
        Car.#constructorParams.forEach((name, i) => this[name] = args[i]);
    }
  }
*/

class Car {
  constructor({ brand, model, year, color, fuelTypes, price }) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }

  getFuelType = () => this.fuelTypes.join('/');

  get fuelType() { return this.fuelTypes.join('/') }

}
// Bendrai naudojami kintamieji
let cars;
let electricCars;
let petrolCars;

console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
{
  const car = new Car({ brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['diesel'], price: 800 });
  console.log(car);
}
console.groupEnd();

console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų, naudodami duomenis <data>');
{
  cars = data.map(carData => new Car(carData));
  console.table(cars);
}
console.groupEnd();

console.group("3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'.");
{
  cars.forEach(x => console.log(x.getFuelType()));
  cars.forEach(x => console.log(x.fuelType));
}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  cars.forEach(({ brand, model, fuelType }) => console.log(`${brand} ${model} - ${fuelType}`));
}
console.groupEnd();

{
  // 5. Atrinkite automobilius, kurių vienintelis kuro tipas yra 'electric'
console.groupCollapsed('5. Atrinkite tik elektrinius automobilius');
{
  electricCars = cars.filter(({ fuelType }) => fuelType === 'electric');
  console.log(electricCars);
}
console.groupEnd();
  
}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{
  // Padarė prielaida jog mišrūs kuro tipai netinka
  petrolCars = cars.filter(x => x.fuelType === 'petrol' && x.year > 2016);
  const petrolCars2 = cars.filter(x => x.fuelTypes.includes('petrol') && x.fuelTypes.length === 1 && x.year > 2016);
  const petrolCars3 = cars.filter(({ year, fuelType }) => fuelType === 'petrol' && year > 2016);
  console.log({
    petrolCars,
    petrolCars2,
    petrolCars3
  });
}
console.groupEnd();

console.groupCollapsed("7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai");
{
  audiCarsFrom2012To2016 = cars.filter(
    ({ brand, year, fuelTypes }) =>
      brand.toLowerCase() === 'audi' && year >= 2012 && year <= 2016 && !fuelTypes.includes('diesel')
  );
  console.log(audiCarsFrom2012To2016);
}
console.groupEnd();

console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{
  const avgElectricCarPrice = electricCars.reduce((price, x) => price + x.price, 0) / electricCars.length;
  console.log(avgElectricCarPrice);
}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
  const totalPrice = petrolCars.reduce((sum, x) => sum + x.price, 0);
  console.log(totalPrice)
}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
/*
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
*/
{
  const carsFormatted = cars.map(car => {
    return {
      brand: car.brand,
      model: car.model,
      price: Math.round(car.price * usd_eur),
      fuelType: car.fuelType
    };
  });
  console.table(carsFormatted);
  
}
console.groupEnd();