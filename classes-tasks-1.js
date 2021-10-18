/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price
*/
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    

  }
  increasePrice = function(incr) { this.price += incr;  }
  // increasePrice = incr => this.price += incr;  
 
}
/*

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);
*/
const car1 = new Car('Fiat', 'Multipla', 240000);
const car2 = new Car('Opel', 'Ascona', 6300);
const car3 = new Car('Trabant', '601', 12500);


/*
3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
*/
console.log(car1, car2, car3);
/*
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);
*/
console.log('Brand:');
console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);
console.log('---------');
console.log('Models:');
console.log(car1.model);
console.log(car2.model);
console.log(car3.model);
console.log('---------');
console.log('Price:');
console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
/*
5. Padidinkite Automobilis objektų kainas šimtu.
car1.price = car1.price + 100;
car2.price = ??? + 100;
???
kitas budas:
car1.price=car1.price+100 ir taip su visom ir tokiu atveju nereikia metodo,bet su metodu daryti irgi 
*/
allCars = [car1, car2, car3];
allCars.forEach(car => car.increasePrice(100));

/*

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
console.table(allCars);
