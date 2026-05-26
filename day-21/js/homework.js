// Take a deeply nested object (4 levels) and write a single immutable update that changes a leaf value.
// Verify the unchanged branches share references with the original (===).

const original = {
    user: {
        profile: {
            address: {
                city: "Jaipur",
                pin: 302001
            }
        }
    },
    settings: {
        theme: "dark"
    }
};


const updated = {
    ...original,
    user: {
        ...original.user,

        profile: {
            ...original.user.profile,

            address: {
                ...original.user.profile.address,

                city: "Mumbai"
            }
        }
    }
};


console.log(updated.user.profile.address.city);
// Mumbai
console.log(original.user.profile.address.city);
// Jaipur
// Changed branch references
console.log(updated.user === original.user);
// false
console.log(updated.user.profile === original.user.profile);
// false
console.log(updated.user.profile.address === original.user.profile.address);
// false

// Unchanged branch reference reused
console.log(updated.settings === original.settings);
// true




// Implement deepFreeze(obj) from scratch. Test it with a 3-level nested object.

function deepFreeze(obj) {
    // Freeze nested objects first
    Object.values(obj).forEach((value) => {
        if (value && typeof value === "object") {
            deepFreeze(value);
        }
    });
    // Freeze current object
    return Object.freeze(obj);
}
const user = {
    name: "Priya",
    address: {
        city: "Jaipur",
        coords: {
            lat: 26.9,
            lng: 75.8
        }
    }
};
deepFreeze(user);

// Mutations fail
user.name = "Anaya";
user.address.city = "Mumbai";
user.address.coords.lat = 99;
console.log(user.name);
// Priya

console.log(user.address.city);
// Jaipur

console.log(user.address.coords.lat);
// 26.9




// Write a pick(obj, keys) helper that returns a new object with only the listed keys. 
// Use destructuring + computed keys.

function pick(obj, keys) {
    const result = {};
    keys.forEach((key) => {
        if (key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
}
const person = {
    name: "Priya",
    age: 25,
    city: "Jaipur"
};
const picked = pick(person, ["name", "city"]);
console.log(picked);
// { name: "Priya", city: "Jaipur" }