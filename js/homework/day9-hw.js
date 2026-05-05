const person = { first: "Priya", last: "Sharma", city: "Jaipur" };

const sentence = `${person.first} ${person.last} from ${person.city}`;

console.log(sentence);


const nums = [1, 2, 3, 4, 5, 6];

const [head, ...tail] = nums;

console.log(head); 
console.log(tail); 


function multiply(...nums){
    return nums.reduce((acc,i)=> acc*i,1);
}



const user = { name: "Anaya", age: 21 };

const updatedUser = { ...user, age: 22 };

console.log(user);        
console.log(updatedUser); 