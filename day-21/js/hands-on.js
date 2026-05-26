// Task 1 Prove Shallow Clone Bug
// Create const orig = { name: "Priya", addr: { city: "Jaipur" } }.
// Make a shallow copy with spread: const copy = { ...orig }.
// Mutate copy.addr.city = "Mumbai". Log orig.addr.city. Note the bug.
// Now use structuredClone(orig) and repeat. Confirm orig is untouched.


const orig = {
    name: "Priya",
    addr: {
        city: "Jaipur"
    }
}

const copy = {...orig};
copy.addr.city = "Mumbai"
console.log(orig.addr.city)

const deepCopy = structuredClone(orig);
console.log(orig.addr.city)


// Task 2 Immutable Nested Update
// Take this state: const state = { user: { name: "Priya", prefs: { theme: "light", lang: "en" } } }.
// Write code that produces a NEW state with prefs.theme set to "dark", leaving state untouched.
// Use spread, don't mutate.
// Verify state.user.prefs.theme is still "light".

const state = {
    user: {
        name: "Priya",
        prefs: {
            theme: "light",
            lang: "en"
        }
    }
};

const newState = {
    ...state,
    user: {
        ...state.user,
        prefs: {
            ...state.user.prefs,
            theme: "dark"
        }
    }
};

console.log(state.user.prefs.theme); // "light"
console.log(newState.user.prefs.theme); // "dark"


// Task 3 Update One Item in an Array
// Take const tasks = [{ id: 1, title: "Learn JS", done: false }, { id: 2, title: "Build app", done: false }].
// Write a function toggleDone(tasks, id) that returns a NEW array with the matching task's done flipped — others untouched.
// Call it twice on the same tasks. Verify originals never mutate.
// Use .map and spread.

const tasks = [
    { id: 1, title: "Learn JS", done: false },
    { id: 2, title: "Build app", done: false }
];

function toggleDone(tasks, id) {
    return tasks.map(task => {
        if (task.id === id) {
            return { ...task, done: !task.done };
        }
        return task;
    });
}

const updatedTasks1 = toggleDone(tasks, 1);
const updatedTasks2 = toggleDone(tasks, 2);

console.log(tasks); // Original array is unchanged
console.log(updatedTasks1); // First task is toggled
console.log(updatedTasks2); // Second task is toggled


// Bonus Safe Deep Read
// Take a partial API response: const data = { user: { name: "Priya", profile: { city: null } } }.
// Write a single expression that reads data.user.profile.city and falls back to "Unknown" if anything in the chain is null/undefined.
// Now another expression reading data.user.profile.bio?.length ?? 0.
// Try with data = {} — confirm both return the fallbacks without crashing.

const data = { user: { name: "Priya", profile: { city: null } } };

const city = data.user?.profile?.city ?? "Unknown";
console.log(city); // "Unknown"

const bioLength = data.user?.profile?.bio?.length ?? 0;
console.log(bioLength); // 0
