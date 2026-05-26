// Build a Vehicle(brand) class with a start() method. 
// Then build Car(brand, doors) and Bike(brand) that both extend it.
// Override start() in Car to call super.start() then log "Car-specific check".Test both.

// Parent class
class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
  
    start() {
      console.log(`${this.brand} vehicle started`);
    }
  }
  
  // Child class - Car
  class Car extends Vehicle {
    constructor(brand, doors) {
      super(brand);
      this.doors = doors;
    }
  
    start() {
      super.start();
      console.log("Car-specific check");
    }
  }
  
  // Child class - Bike
  class Bike extends Vehicle {
    constructor(brand) {
      super(brand);
    }
  }
  
  // Test Car
  const car = new Car("Toyota", 4);
  
  car.start();
  
  /*
  Output:
  Toyota vehicle started
  Car-specific check
  */
  
  // Test Bike
  const bike = new Bike("Yamaha");
  
  bike.start();
  
  /*
  Output:
  Yamaha vehicle started
  */



// Add a static count to your Counter class that tracks how many counters have been created.
//  Increment in the constructor.

class Counter {
    // Static property
    static count = 0;
  
    // Private field
    #value = 0;
  
    constructor() {
      // Increment whenever a new object is created
      Counter.count++;
    }
  
    inc() {
      this.#value++;
    }
  
    dec() {
      if (this.#value === 0) {
        throw new Error("Count cannot go below 0");
      }
  
      this.#value--;
    }
  
    get value() {
      return this.#value;
    }
  }
  
  // Create counters
  const c1 = new Counter();
  const c2 = new Counter();
  const c3 = new Counter();
  
  // Check static count
  console.log(Counter.count); // 3
  
  // Use counters
  c1.inc();
  c1.inc();
  
  console.log(c1.value); // 2



// Build a Temperature class with a private #celsius field and getters for celsius and fahrenheit. 
// Add a setter for celsius that validates >= -273.15.

class Temperature {
    // Private field
    #celsius;
  
    constructor(celsius) {
      this.celsius = celsius; // uses setter
    }
  
    // Getter for celsius
    get celsius() {
      return this.#celsius;
    }
  
    // Setter with validation
    set celsius(value) {
      if (value < -273.15) {
        throw new Error(
          "Temperature cannot be below absolute zero"
        );
      }
  
      this.#celsius = value;
    }
  
    // Getter for fahrenheit
    get fahrenheit() {
      return (this.#celsius * 9) / 5 + 32;
    }
  }
  
  // Test
  const temp = new Temperature(25);
  
  console.log(temp.celsius);    // 25
  console.log(temp.fahrenheit); // 77
  
  // Update temperature
  temp.celsius = 100;
  
  console.log(temp.celsius);    // 100
  console.log(temp.fahrenheit); // 212
  
  // Invalid value
  try {
    temp.celsius = -300;
  } catch (e) {
    console.log(e.message);
  }
  
  /*
  Output:
  Temperature cannot be below absolute zero
  */