//Task 1 Build a Student Object

const student = {
    name: "Ananya",
    age: 21,
    city: "Jaipur",
    course: "BTech",
    marks: [60,70,80]
}

console.log(student);
console.log(student.name);       
console.log(student.age);        
console.log(student.marks[0]);  

student.email = "anaya@example.com"; 
student.age = 22;                   
delete student.city;                

console.log(student);


// Task 2 Method with this

const bankAccount = {
    holder: "Aarav",
    balance: 5000,

    deposit(amount){
        this.balance += amount;
        return this.balance;
    },

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount
            return this.balance;
        }
        else{
            return "insuffient balance";
        }

    }
};

console.log(bankAccount.deposit(1000));
console.log(bankAccount.withdraw(2000));
console.log(bankAccount.withdraw(10000));

// Task 3 Destructuring

const product = {
  id: 101,
  name: "Laptop",
  price: 60000,
  brand: "Dell",
  stock: 5
};

const { name, price } = product;

console.log(name);  
console.log(price); 


const { brand: make } = product;
console.log(make); 

const { warranty = "1 year" } = product;
console.log(warranty); 


//Object as Iterable

const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

const entries = Object.entries(student);
console.log(entries);

entries.forEach(([keys, value]) => {
    console.log(`${keys}: ${value}`);
});