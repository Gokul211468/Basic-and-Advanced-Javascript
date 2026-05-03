const names = ["Priya", "Aarav", "Riya"];
const greetings = names.map(name => `Hello, ${name}`);
console.log(greetings);

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

const evenSum = nums
  .filter(n => n % 2 === 0)
  .reduce((sum, n) => sum + n, 0);

console.log(evenSum); 

const arr = [3, 1, 4, 1, 5, 9, 2, 6];

const max1 = Math.max(...arr);
const max2 = arr.reduce((max, n) => n > max ? n : max, arr[0]);

console.log(max1); 
console.log(max2); 

function average(arr) {
  const sum = arr.reduce((total, n) => total + n, 0);
  return sum / arr.length ;
}

console.log(average([10, 20, 30])); // 20