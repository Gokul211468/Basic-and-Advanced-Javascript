

// Write a fetchAllUsers(ids) function that takes an array of IDs and 
// returns an array of users in PARALLEL using Promise.all + map. 
// Time it against a sequential version.


// Mock fetchUser
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: `User ${id}`
            });
        }, 500);
    });
}



// Parallel version
async function fetchAllUsers(ids) {
    const start = Date.now();

    const users = await Promise.all(
        ids.map((id) => fetchUser(id))
    );

    console.log("Parallel users:", users);

    console.log(`Parallel time: ${Date.now() - start}ms`);
}



// Sequential version
async function fetchAllUsersSequential(ids) {
    const start = Date.now();

    const users = [];

    for (const id of ids) {
        const user = await fetchUser(id);

        users.push(user);
    }

    console.log("Sequential users:", users);

    console.log(`Sequential time: ${Date.now() - start}ms`);
}

fetchAllUsers([1, 2, 3]);
fetchAllUsersSequential([1, 2, 3]);


// Write a withTimeout(promise, ms) helper that returns
// a Promise that rejects with "timeout" if the original doesn't settle in ms. Use Promise.race internally.

function withTimeout(promise, ms) {
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("timeout"));
        }, ms);
    });

    return Promise.race([promise, timeoutPromise]);
}



// Test timeout
withTimeout(fetchUser(1), 200)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error.message);
    });


// Write an async function that loops with for...of over [300, 100, 200] and waits each amount in ms,
//  logging when each finishes. Confirm the order is the input order.

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function runSequentialWaits() {
    const times = [300, 100, 200];

    for (const ms of times) {
        await wait(ms);

        console.log(`Finished ${ms}ms`);
    }
}
runSequentialWaits();