for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


let n = 1;

while (n * n <= 1000) {
  n++;
}

console.log(n); // 32


for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row);
}


const scores = [88, 72, 95, 60, 41];

let max = scores[0];

for (const score of scores) {
  if (score > max) {
    max = score;
  }
}

console.log(max); 