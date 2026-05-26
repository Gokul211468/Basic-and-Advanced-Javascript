// Task 1 Convert .then to async/await
// Take this chain: fetchUser(7).then(u => fetchOrders(u.id)).then(orders => console.log(orders.length)).catch(e => console.error(e)).
// Mock fetchUser and fetchOrders with setTimeout that resolve in 300ms.
// Rewrite the chain as a single async function showOrders(id) using await and try/catch.
// Call it with showOrders(7)

function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "Gokul"
            });
        }, 300);
    });
}

function fetchOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                "order1",
                "order2",
                "order3"
            ]);
        }, 300);
    });
}

fetchUser(7)
  .then(u => fetchOrders(u.id))
  .then(orders => console.log(orders.length))
  .catch(e => console.error(e))

async function usingAsync(id) {
    try{
        const user = await fetchUser(id)
        const orders = await fetchOrders(user.id)
        console.log(orders.length)
    }
    catch(error){
        console.log(error)
    }
}

usingAsync(7)



// Task 2 Sequential vs Parallel Timing
// Take a fetchPrice(id) that takes 500ms to resolve to { id, price: 100 }.
// Write slow() that fetches 3 products with separate awaits. Time it.
// Write fast() that uses Promise.all. Time it.
// Confirm slow ≈ 1500ms and fast ≈ 500ms.

function fetchPrice(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                price: 100
            });
        }, 500);
    })
}

async function slow(){
    const start = Date.now();
    const p1 = await fetchPrice(1);
    const p2 = await fetchPrice(2);
    const p3 = await fetchPrice(3);
    console.log(`slow time is ${Date.now() - start} ms`)
}

async function fast(){
    const start = Date.now();
    const results = await Promise.all([fetchPrice(1), fetchPrice(2), fetchPrice(3)]);
    console.log(`fast time is ${Date.now() - start} ms`)
}

slow();
fast(); 



// Task 3 Fix the forEach Trap
// Take an array const ids = [1, 2, 3] and a fetchPrice(id) (500ms each, returns { id, price: 100 }).
// Try to write a function that uses ids.forEach(async (id) => ...) to log each price. Time it.
// Note that the function returns BEFORE any price logs.
// Fix it two ways: (1) for...of, (2) Promise.all + map.

const ids = [1, 2, 3];
function fetchProduct(id) {
    return new Promise((res) => setTimeout(() => res({ id, price: 100 }), 500));
}

ids.forEach(async (id) => {
    const p = await fetchProduct(id);
    console.log(p.price);
});

// FIX 1 — for...of (sequential)
async function sequential() {
    console.log("start");
    for (const id of ids) {
      const p = await fetchProduct(id);
      console.log("got", p);
    }
    console.log("end");                     // logs AFTER all "got"
  }

// FIX 2 — Promise.all + map (parallel, preferred)
async function parallel() {
    console.log("start");
    const promises = ids.map(id => fetchProduct(id));
    const products = await Promise.all(promises);
    products.forEach(p => console.log("got", p));
    console.log("end");
}

sequential();
parallel();


// Bonus Retry with async/await
// Write retry(fn, attempts) that calls async fn() and retries up to attempts times if it rejects.
// After all attempts fail, throw the last error.
// Test with a flaky() function that randomly resolves/rejects.

function flaky() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve("Success!");
            } else {
                reject(new Error("Random failure"));
            }
        }, 300);
    });
}


async function retry(fn, attempts) {
    let lastError;

    for (let i = 1; i <= attempts; i++) {
        try {
            console.log(`Attempt ${i}`);

            const result = await fn();

            return result;

        } catch (error) {
            console.log(`Failed attempt ${i}`);

            lastError = error;
        }
    }

    throw lastError;
}


retry(flaky, 3)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(`Final error: ${error.message}`);
    });
