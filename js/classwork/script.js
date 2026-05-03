

const age = 20;
if (age >= 18) console.log("vote");

const score = 30;
if (score > 50) console.log("pass");

marks = 95
if (marks >= 90) console.log("If marks is above 90, then Grade is A");
else if (marks >= 75) console.log("If the mark is above 75, then the Grade is B");
else if (marks >= 60) console.log("If the mark is above 60, then the Grade is C");
else console.log("Else the Grade is F");


let day = "Tuesday";
 
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Tuesday":
    console.log("Second day");
    break;

  case "Friday":
    console.log("Almost weekend!");
    break;

  default:
    console.log("Some other day");

}


if (0) { 
    console.log("is a truthy value")
 }

if ("0") {
    console.log("string with 0 as value is a truthy value")
}

if ([]) {
    console.log("empty array is a truthy value")
}

if (null) {
    console.log("is a truthy value")
}

if (NaN) {
    console.log("is a truthy value")
}

if ("false") {
    console.log("string with false as value is a truthy value")
}


// task1
function printGrade(marks){

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} 
else if (marks >= 90) {
  console.log("Grade is A");
} 
else if (marks >= 75) {
  console.log("Grade is B");
} 
else if (marks >= 60) {
  console.log("Grade is C");
} 
else {
  console.log("Grade is F");
}

}

printGrade(75);
printGrade(95);
printGrade(50);

//task2
day = "Wednesday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;

  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Invalid day");
}

//task3


if (0){
    console.log("0 is a truthy value");
}  
else{
    console.log("0 is a falsy value");
} 


if ("0") {
  console.log('"0" is a truthy value');
} else {
  console.log('"0" is a falsy value');
}

if ("") {
  console.log("empty string is a truthy value");
} else {
  console.log("empty string is a falsy value");
}

if (" ") {
  console.log("string which has space inside it is truthy");
} else {
  console.log("string which has space inside it is falsy");
}

if (null) {
  console.log("null is a truthy value");
} else {
  console.log("null is a falsy value");
}

if (undefined) {
  console.log("undefined is a truthy value");
} else {
  console.log("undefined is a falsy value");
}

if (NaN) {
  console.log("NaN is a truthy value");
} else {
  console.log("NaN is a falsy value");
}

if ([]) {
  console.log("[] is a truthy value");
} else {
  console.log("[] is a falsy value");
}

if ({}) {
  console.log("{} is a truthy value");
} else {
  console.log("{} is a falsy value");
}

if ("false") {
  console.log("string false is truthy value");
} else {
  console.log("string false is falsy value");
}

// falsy values: false, 0, "", null, undefined, NaN

//bonus task

const user1 = {
    isBanned : true,
    age : 12
}

const user2 = {
    isBanned : null,
    age : 18
}

function canComment(user) {
  if (user) {
    if (!user.isBanned) {
      if (user.age >= 13) {
        console.log("Comment allowed");
      }
    }
  }
}

function comment(user){
    if(!user) return "comment not allowed";
    if(user.isBanned) return "comment not allowed";
    if(user.age >= 13) return "comment allowed"
}

console.log(comment(user1));
console.log(comment(user2));

const fruits = ["apple", "banana", "mango"];

for(let i = 0; i < fruits.length; i++){
console.log(fruits[i]);
} 

const Username = "Priya";
for(let i = 0; i < Username.length; i++){
console.log(Username[i]);
} 

const s = { name: "Aarav", age: 22 };
// for (const k in s) console.log(k);

// for (const k in s) console.log(k, s[k]);

const keys = Object.keys(s);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key, s[key]);
}















