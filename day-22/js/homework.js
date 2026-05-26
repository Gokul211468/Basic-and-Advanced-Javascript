// Build a "tag counter": given an array of posts each with a .tags array,
// return a Map of tag → count. 
// Use a Map (not an Object).

// Posts
const posts = [
    {
      title: "Post 1",
      tags: ["js", "react"]
    },
    {
      title: "Post 2",
      tags: ["js", "node"]
    },
    {
      title: "Post 3",
      tags: ["react", "css"]
    }
  ];
  
  // Tag counter
  function countTags(posts) {
    const tagMap = new Map();
  
    for (const post of posts) {
      for (const tag of post.tags) {
        tagMap.set(
          tag,
          (tagMap.get(tag) || 0) + 1
        );
      }
    }
  
    return tagMap;
  }
  
  const result = countTags(posts);
  
  console.log(result);
  
  /*
  Output:
  Map(4) {
    'js' => 2,
    'react' => 2,
    'node' => 1,
    'css' => 1
  }
  */


// Build a union(a, b), intersection(a, b), difference(a, b) 
// set of helpers from scratch using Set + spread.

// Union
function union(a, b) {
    return new Set([...a, ...b]);
  }
  
  // Intersection
  function intersection(a, b) {
    return new Set(
      [...a].filter(value => b.has(value))
    );
  }
  
  // Difference
  function difference(a, b) {
    return new Set(
      [...a].filter(value => !b.has(value))
    );
  }
  
  // Test sets
  const a = new Set([1, 2, 3, 4]);
  const b = new Set([3, 4, 5, 6]);
  
  console.log(union(a, b));
  console.log(intersection(a, b));
  console.log(difference(a, b));
  
  /*
  Output:
  Set(6) {1, 2, 3, 4, 5, 6}
  Set(2) {3, 4}
  Set(2) {1, 2}
  */



// Convert a Map of { name → age } to an array of [name, age] pairs, 
// sorted by age. Use destructuring.

// Map of name -> age
const ages = new Map([
    ["Priya", 24],
    ["Aarav", 30],
    ["Riya", 21],
    ["Anaya", 27]
  ]);
  
  // Convert to array and sort by age
  const sorted = [...ages].sort(
    ([, ageA], [, ageB]) => ageA - ageB
  );
  
  console.log(sorted);
  
  /*
  Output:
  [
    ["Riya", 21],
    ["Priya", 24],
    ["Anaya", 27],
    ["Aarav", 30]
  ]
  */