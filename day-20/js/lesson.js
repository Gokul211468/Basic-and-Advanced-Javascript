// setTimeout(0) Mystery — Solved

console.log("1");                                  // sync
setTimeout(() => console.log("2"), 0);             // macrotask
Promise.resolve().then(() => console.log("3"));    // microtask
console.log("4");                                  // sync

// Output: 1, 4, 3, 2
//
// Step by step:
//   Sync: "1" → "4"                  (call stack drains)
//   Microtasks: "3"                  (drained before any macrotask)
//   Macrotasks: "2"                  (one at a time)
//
// "3" beats "2" because microtasks have priority.
// "2" with delay 0 doesn't mean "now" — it means "queue this as soon as possible
//  as a macrotask, after sync code AND all microtasks are done".


//Microtask vs Macrotask

// 5 logs — predict the order before you run

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
  .then(() => console.log("C"))
  .then(() => console.log("D"));    // chained: another microtask

queueMicrotask(() => console.log("E"));

console.log("F");

// Output: A, F, C, E, D, B
//
// 1. Sync: A, F
// 2. Microtasks (drained completely):
//      C → schedules another microtask (D)
//      E (was queued before C scheduled D, so E runs after C and before D? — depends on order)
//    Actual order: A, F, C, E, D, B
//      .then(C) → microtask 1
//      queueMicrotask(E) → microtask 2
//      C runs, then schedules D
//      E runs (it was queued earlier than D)
//      D runs (queued mid-drain — still drained in this tick)
// 3. Macrotask: B



//Don't Block the Loop

function blocking() {
    const t0 = Date.now();
    // Commented out to prevent browser freeze - uncomment to see blocking behavior
    // while (Date.now() - t0 < 3000) {}    // busy-wait 3 seconds
    console.log("done blocking (simulated - blocking loop commented out)");
  }
  
  setTimeout(() => console.log("timer"), 0);
  blocking();
  console.log("after block");
  
  // Output:
  //   (3-second pause)
  //   done blocking
  //   after block
  //   timer
  //
  // blocking() holds the call stack busy for 3 seconds.
  // During that time, nothing else can run — not even a setTimeout(0).
  // The browser tab is FROZEN. Don't write code like this in real apps!


  