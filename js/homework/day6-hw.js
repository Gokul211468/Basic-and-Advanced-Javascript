function kmToMiles(km) {
  return km * 0.621;
}

console.log(kmToMiles(10)); 

function gstAmount(price, rate = 18) {
  return (price * rate) / 100;
}

console.log(gstAmount(1000));    

function fullName(first, last) {
  return `${first} ${last}`;
}

console.log(fullName("Gokul", "Krishna"));

function isAdult(age) {
  return age >= 18;
}

console.log(isAdult(20)); 
