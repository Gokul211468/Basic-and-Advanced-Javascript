// Build a chunk(array, fn, chunkSize) helper that processes an array in chunks of chunkSize, 
// yielding to the event loop with setTimeout(0) between chunks. 
// Test with a 100k-item array.

// Process array in chunks
function chunk(array, fn, chunkSize) {
    let index = 0;
  
    function processChunk() {
      const end = Math.min(index + chunkSize, array.length);
  
      // Process current chunk
      for (let i = index; i < end; i++) {
        fn(array[i], i);
      }
  
      index = end;
  
      // Yield to event loop before next chunk
      if (index < array.length) {
        setTimeout(processChunk, 0);
      } else {
        console.log("Processing complete");
      }
    }
  
    processChunk();
  }
  
  // Create 100k-item array
  const bigArray = Array.from(
    { length: 100000 },
    (_, i) => i + 1
  );
  
  // Test
  chunk(
    bigArray,
    (item, index) => {
      // Example work
      if (index % 25000 === 0) {
        console.log("Processing:", item);
      }
    },
    5000
  );
  
  /*
  Example Output:
  Processing: 1
  Processing: 25001
  Processing: 50001
  Processing: 75001
  Processing complete
  */



// Write a snippet that proves await is a microtask: schedule an await and a setTimeout(0),
//  predict which runs first.

async function demo() {
    console.log("async start");
  
    await Promise.resolve();
  
    console.log("after await");
  }
  
  demo();
  
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  
  console.log("sync end");
  
  /*
  Prediction:
  1. async start
  2. sync end
  3. after await
  4. setTimeout
  
  Actual Output:
  async start
  sync end
  after await
  setTimeout
  */