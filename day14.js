// // Create a new post using Async/Await
// async function createNewPost() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         title: 'My New Post',
//         body: 'This is the content of my post',
//         userId: 1
//       })
//     });
    
//     const newPost = await response.json();
//     console.log('Post created with ID:', newPost.id);
//     console.log('New post:', newPost);
//   } catch (error) {
//     console.error('Failed to create post:', error);
//   }
// }

// createNewPost();

// // // Fetch user and their posts using Async/Await
// // async function fetchUserWithPosts(userId) {
// //   try {
// //     // Fetch user data
// //     const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
// //     if (!userResponse.ok) throw new Error('User not found');
// //     const user = await userResponse.json();
    
// //     // Fetch user's posts
// //     const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
// //     const posts = await postsResponse.json();
    
// //     console.log(`User: ${user.name} (${user.email})`);
// //     console.log(`Number of posts: ${posts.length}`);
// //     console.log('First post title:', posts[0]?.title);
    
// //     return { user, posts };
// //   } catch (error) {
// //     console.error('Error:', error.message);
// //   }
// // }

// // fetchUserWithPosts(1);

// // // Fetch a single post using Promises
// // function fetchPostWithPromise(postId) {
// //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// //     .then(response => {
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       return response.json();
// //     })
// //     .then(post => {
// //       console.log('Post:', post.title);
// //       console.log('Content:', post.body);
// //     })
// //     .catch(error => {
// //       console.error('Error fetching post:', error.message);
// //     });
// // }

// // fetchPostWithPromise(1);


// function makingGetRequest(userId){
//     fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });
// }

// makingGetRequest(1)

// async function request() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log(`Error: ${error}`)
//     }
// }

// request()


// function fetchProduct(id) {
//   return new Promise((res) => setTimeout(() => res({ id, price: 100 }), 1000));
// }

// const ids = [1, 2, 3];

// // BUG — finishes before any fetch completes
// async function bug() {
//   console.log("start");
//   ids.forEach(async (id) => {
//     const p = await fetchProduct(id);     // Promise returned but ignored by forEach
//     console.log("got", p);
//   });
//   console.log("end");                     // logs BEFORE any "got"
// }

// // FIX 1 — for...of (sequential)
// async function sequential() {
//   console.log("start");
//   for (const id of ids) {
//     const p = await fetchProduct(id);
//     console.log("got", p);
//   }
//   console.log("end");                     // logs AFTER all "got"
// }

// // FIX 2 — Promise.all + map (parallel, preferred)
// async function parallel() {
//   console.log("start");
//   const results = await Promise.all(
//     ids.map((id) => fetchProduct(id)),    // each returns a Promise; map collects them
//   );
//   results.forEach((p) => console.log("got", p));
//   console.log("end");
// }

// bug();
// //sequential();

// const user = {
//   name: "Priya",
//   age: 25,
//   address: { place:{city: "Jaipur", pin: 302001 }},
//   hobbies: ["reading", "trekking"],
// };

// const user1 = {
//   ...user,
//   address: {
//     ...user.address,
//     place: {
//       ...user.address.place,
//       city: "Mumbai"
//     }
//   }
// };

// console.log(user.address.place.city)
// console.log(user1.address.place.city)


// Manually using an array's iterator
const arr = ["a", "b", "c"];
console.log(arr)
const it  = arr[Symbol.iterator]();        // get the iterator object
console.log(it)
console.log(it.next());    // { value: "a", done: false }
console.log(it.next());    // { value: "b", done: false }
console.log(it.next());    // { value: "c", done: false }
console.log(it.next());    // { value: undefined, done: true }

// for...of is sugar over this protocol:
for (const ch of arr) {
  console.log(ch);
}
// Internally: while not done → { value, done } = it.next() → use value

const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// Now range works with for...of, spread, destructuring
for (const n of range) console.log(n);    // 1, 2, 3, 4, 5
console.log([...range]);                  // [1, 2, 3, 4, 5]
const [first, ...rest] = range;
console.log(first, rest);                 // 1 [2, 3, 4, 5]