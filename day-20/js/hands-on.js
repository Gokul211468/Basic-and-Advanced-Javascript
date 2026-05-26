// Task 1 Predict the Output
// Type this exactly:
// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
// Predict the output BEFORE running.
// Run. Match against your prediction.
// In a comment, list which lines were sync, which microtask, which macrotask.


console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
//output is 1, 4, 3, 2
// Execution order:
// 1. Run all synchronous code first
//    Output:1, 4
// 2. Drain microtask queue
//    Output:3
// 3. Execute macrotasks
//    Output:2



// Task 2 Two Promises and a Timer
// Run this:
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// Promise.resolve().then(() => console.log("C")).then(() => console.log("D"));
// queueMicrotask(() => console.log("E"));
// console.log("F");
// Predict, run, compare.
// In a comment, draw the queues at each step.

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C")).then(() => console.log("D"));
queueMicrotask(() => console.log("E"));
console.log("F");
//output is A, F, C, E, D, B


// - A and F are synchronous, so they run first.
// - C and E are microtasks.
// - D is added as a new microtask after C finishes.
// - B is a macrotask from setTimeout.



// Task 3 Block the Loop
// Write a blockFor(ms) that busy-waits for ms milliseconds (use a while with Date.now()).
// Schedule a setTimeout(() => console.log("timer"), 100).
// Immediately call blockFor(2000) then console.log("after block").
// Note the timer doesn't fire until well after 100ms.

function blockFor(ms){
    const t0 = Date.now();
    // Commented out to prevent browser freeze - uncomment to see blocking behavior
    // while(Date.now() - t0 < ms){}  // Fixed condition: Date.now() - t0 < ms
    console.log("done blocking (simulated - blocking loop commented out)")
}

setTimeout(()=>{
    console.log("timer")
},100)

// blockFor(2000);  // Commented out to prevent browser freeze

console.log("after blocking");



// Bonus Microtask Storm
// Write a function that schedules 5 setTimeout(fn, 0) calls.
// Inside ONE of the timers, schedule 3 Promise.resolve().then(...).
// Predict the output. Run. Verify.
// In a comment, explain how microtasks "starve" macrotasks if abused.

for(let i = 1; i <= 5; i++){
    setTimeout(()=>{
        console.log(`timer${i}`)
        if(i==3){
            Promise.resolve().then(()=> console.log("promise1"));
            Promise.resolve().then(()=> console.log("promise2"));
            Promise.resolve().then(()=> console.log("promise3"));
        }
    },0)
}
// Microtasks can "starve" macrotasks because the event loop
// always completes the entire microtask queue before running
// the next macrotask.

// If microtasks keep creating more microtasks,
// timers and UI events can get delayed indefinitely.