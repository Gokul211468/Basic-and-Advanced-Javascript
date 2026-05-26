// Write wait(ms) that returns a Promise resolving after ms. 
// Use it: wait(500).then(() => wait(500)).then(() => console.log("1s")).

function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  // Wait 500ms twice
  wait(500)
    .then(() => wait(500))
    .then(() => console.log("1s"));
  
  /*
  After ~1 second:
  1s
  */

// Take a fetchData(id) that randomly succeeds or rejects (50/50). 
// Chain three sequential .thens and end with .catch. Run multiple times to see both paths.

// Fake API function
function fetchData(id) {
    return new Promise((resolve, reject) => {
      // Random success/failure
      const success = Math.random() > 0.5;
  
      setTimeout(() => {
        if (success) {
          resolve(`Data for ID ${id}`);
        } else {
          reject(`Failed to fetch ID ${id}`);
        }
      }, 500);
    });
  }
  
  // Promise chain
  fetchData(1)
    .then((data) => {
      console.log(data);
      return fetchData(2);
    })
    .then((data) => {
      console.log(data);
      return fetchData(3);
    })
    .then((data) => {
      console.log(data);
      console.log("All fetches completed");
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  
  /*
  Possible Output 1:
  Data for ID 1
  Data for ID 2
  Data for ID 3
  All fetches completed
  
  Possible Output 2:
  Data for ID 1
  Error: Failed to fetch ID 2
  
  Possible Output 3:
  Error: Failed to fetch ID 1
  */


// Use Promise.race with 
// [fetchUser(7), wait(2000).then(() => Promise.reject(new Error("timeout")))] to add a 2-second timeout to a fetch.

// wait helper
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Fake fetch function
function fetchUser(id) {
  return new Promise((resolve) => {
    // Simulate random network delay
    const delay = Math.random() * 3000;

    setTimeout(() => {
      resolve(`User ${id} loaded`);
    }, delay);
  });
}

// Promise.race with timeout
Promise.race([
  fetchUser(7),

  wait(2000).then(() => {
    return Promise.reject(
      new Error("timeout")
    );
  })
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

/*
Possible Output:
User 7 loaded

OR

timeout
*/


// Use Promise.any with three flaky fetches.
// Demonstrate that it returns the first SUCCESS, ignoring rejections.

// Flaky fetch function
function flakyFetch(name) {
    return new Promise((resolve, reject) => {
      // Random success/failure
      const success = Math.random() > 0.5;
  
      const delay = Math.random() * 2000;
  
      setTimeout(() => {
        if (success) {
          resolve(`${name} succeeded`);
        } else {
          reject(`${name} failed`);
        }
      }, delay);
    });
  }
  
  // Promise.any
  Promise.any([
    flakyFetch("Fetch A"),
    flakyFetch("Fetch B"),
    flakyFetch("Fetch C")
  ])
    .then((result) => {
      console.log("First success:", result);
    })
    .catch((error) => {
      console.log("All failed");
      console.log(error);
    });
  
  /*
  Possible Output:
  First success: Fetch B succeeded
  
  OR
  First success: Fetch A succeeded
  
  Promise.any ignores rejected promises
  until one promise resolves.
  
  Only if ALL promises fail
  does it go to catch().
  */