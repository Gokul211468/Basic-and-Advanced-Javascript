// Day 5 - Loops: Hands-on Tasks (Exercises)

const topic1Snippet = `// Task 1: Multiplication Table with for
for(let i = 1; i <= 10; i++){
    console.log(\`7*\${i} = \${7*i}\`);
}

console.log("even multiples of 7"); 
for(let i = 1; i <= 10; i++){
   if(7*i % 2 === 0) console.log(\`7*\${i} = \${7*i}\`);
}`;

const topic2Snippet = `// Task 2: Sum with while
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;   
    i++;       
}

console.log(sum);

let sum1 = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {  
        sum1 += j;
    }
    j++;
}
console.log(sum1);`;

const topic3Snippet = `// Task 3: for...of with Names
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

for (const name of names) {
    console.log(name);
}

let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log(count);

const city = "Jaipur";

for (const char of city) {
    console.log(char);
}

//Bonus: Object Inspector with for...in

const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };

let objCount = 0;
for (const key in student) {
    console.log(\`\${key}: \${student[key]}\`);
    objCount++;
}

console.log(objCount);`;

// Inject snippets into HTML
document.querySelector("#topic1Code code").textContent = topic1Snippet;
document.querySelector("#topic2Code code").textContent = topic2Snippet;
document.querySelector("#topic3Code code").textContent = topic3Snippet;

// Run demonstrations
console.log("=== Day 5: Loops - Hands-on Tasks ===");

console.log("--- Task 1: Multiplication Table ---");
for(let i = 1; i <= 10; i++){
    console.log(`7*${i} = ${7*i}`);
}

console.log("even multiples of 7"); 
for(let i = 1; i <= 10; i++){
   if(7*i % 2 === 0) console.log(`7*${i} = ${7*i}`);
}

console.log("--- Task 2: Sum with while ---");
let sum = 0;
let i = 1;

while (i <= 100) {
    sum += i;   
    i++;       
}

console.log("Sum 1-100:", sum);

let sum1 = 0;
let j = 1;

while (j <= 100) {
    if (j % 2 !== 0) {  
        sum1 += j;
    }
    j++;
}
console.log("Sum odd numbers 1-100:", sum1);

console.log("--- Task 3: for...of with Names ---");
const names = ["Priya", "Aarav", "Riya", "Kabir", "Anaya"];

for (const name of names) {
    console.log(name);
}

let count = 0;

for (const name of names) {
    if (name.length > 4) {
        count++;
    }
}

console.log("Names with length > 4:", count);

const city = "Jaipur";

for (const char of city) {
    console.log(char);
}

console.log("--- Bonus: Object Inspector ---");
const student = { name: "Anaya", age: 21, city: "Jaipur", course: "B.Tech" };

let objCount = 0;
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
    objCount++;
}

console.log("Total properties:", objCount);
