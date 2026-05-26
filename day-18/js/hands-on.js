// Task 1 Sync vs Async Output
// Type: console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");
// Promise.resolve().then(() => console.log("D"));
// Predict the output order BEFORE running.
// Run. Note the actual order.
// In a comment, explain why D comes before B even though both are "async with delay 0".

console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
Promise.resolve().then(() => console.log("D"));

// A C B D
// A and C are synchronous → first.
// Promise.then callbacks go to the MICROTASK queue.
// setTimeout callbacks go to the MACROTASK queue.
// After sync code finishes, the engine drains ALL microtasks before any macrotask.
// → D (microtask) runs before B (macrotask).


// Task 2 Promisify a Callback API
// Take this callback-style function: function delayLog(msg, ms, cb) { setTimeout(() => {
// console.log(msg); cb(null); }, ms); }
// Wrap it in a Promise-returning version delayLogPromise(msg, ms) .
// Use it to chain three logs: "1" after 300ms, then "2" after 200ms, then "3" after 100ms.


function delayLog(msg, ms, cb){
    setTimeout(() =>{
        console.log(msg);
        cb(null);
    },ms)
}

function delayLogPromise(msg, ms){
    return new Promise((resolve, reject)=>{
        delayLog(msg, ms, (error) =>{
            if(error) reject(error);
            else resolve();
        })
    })
}

delayLogPromise("1", 300)
.then(()=> delayLogPromise("2", 200))
.then(()=> delayLogPromise("3", 100));


// Task 3 Promise.all in Action
// Write a function fetchPrice(item, ms) that returns a Promise resolving to a price object after
// ms milliseconds. Use this data: pen → 50, book → 200, bag → 800 .
// Use Promise.all to fetch all three in parallel.
// Sum the prices and log the total.
// Time the whole thing with Date.now() — confirm it's near the SLOWEST item, not the sum.


const prices = {
    pen: 50,
    book: 200,
    bag: 800
};
const start = Date.now();

function fetchPrice(item, ms){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve({
                item: item,
                price: prices[item]
            });
        },ms)
    });
}

Promise.all([fetchPrice("pen",1000), fetchPrice("book", 2000), fetchPrice("bag", 3000)])
.then((result) =>{
    console.log(result);
    const total = result.reduce((acc,curr)=> {
        acc += curr.price;
        return acc;
    },0)
    console.log(Date.now() - start);
    console.log(`Total is ${total}`);
})



// Bonus Promise.allSettled vs Promise.all
// Take three promises: Promise.resolve("ok1") , Promise.reject(new Error("fail")) ,
// Promise.resolve("ok2") .
// First wrap them in Promise.all — what happens?
// Now wrap them in Promise.allSettled — what happens?
// In a comment, explain when you'd reach for each.

const p1 = Promise.resolve("ok1");
const p2 = Promise.reject(new Error("fail"));
const p3 = Promise.resolve("ok2")

Promise.all([p1, p2, p3])
.then((result) => {
    console.log("recieved");
})
.catch((error)=>{
    console.log(`error is ${error.message}`)
})

Promise.allSettled([p1, p2, p3])
.then((result)=>{
    console.log("recieved")
})
.catch((error)=>{
    console.log(error)
})

//When to use Promise.all():
// - Use when ALL operations must succeed
// - If one fails, the whole operation should fail

// When to use Promise.allSettled():
// - Use when you want results from ALL operations
//   even if some fail
// - Useful when partial success is acceptable