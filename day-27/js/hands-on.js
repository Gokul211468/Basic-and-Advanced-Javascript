// Task 1 Implement debounce
// Write debounce(fn, delay) from scratch.
// Use it on a fake search: every "keystroke" calls handleSearch(query).
// Simulate 5 keystrokes with setTimeout 50ms apart, then a 500ms gap, then 2 more.
// Confirm handleSearch only fires twice — once after the first burst, once after the second.

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

function handleSearch(query) {
    console.log(`Searching: ${query}`);
}

const debouncedSearch = debounce(handleSearch, 300);

// First burst (5 keystrokes, 50ms apart)
setTimeout(() => debouncedSearch("h"), 0);
setTimeout(() => debouncedSearch("he"), 50);
setTimeout(() => debouncedSearch("hel"), 100);
setTimeout(() => debouncedSearch("hell"), 150);
setTimeout(() => debouncedSearch("hello"), 200);

// 500ms gap

// Second burst (2 keystrokes)
setTimeout(() => debouncedSearch("hello "), 700);
setTimeout(() => debouncedSearch("hello w"), 750);

/*
Output:

Searching: hello
Searching: hello w
*/


// Task 2 Implement throttle
// Write throttle(fn, delay) from scratch.
// Use it on a "scroll" simulation: call the throttled function 10 times in a tight loop.
// Confirm the function only fires once (or twice, depending on timing).

function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
}

function handleScroll() {
    console.log("Scroll event fired");
}

const throttledScroll = throttle(handleScroll, 1000);

// Simulate 10 rapid scroll events
for (let i = 0; i < 10; i++) {
    throttledScroll();
}

/*
Output:

Scroll event fired
*/


// Task 3 Spot the Memory Leaks
// Read these snippets, label each as leak/safe, and explain.
// (a) setInterval(updateClock, 1000) inside a SPA component that unmounts.
// (b) const handler = () => doStuff(); btn.addEventListener("click", handler); then btn.remove();
// (c) function () { msg = "hello"; } (no let/const).
// (d) useEffect(() => { const id = setInterval(...); return () => clearInterval(id); }, []).

/*
(a) setInterval(updateClock, 1000) inside a SPA component that unmounts.

❌ Leak
Reason:
The interval keeps running even after the component is removed unless clearInterval() is called.


(b) const handler = () => doStuff();
    btn.addEventListener("click", handler);
    then btn.remove();

⚠️ Potential Leak
Reason:
Removing the button from the DOM does not automatically remove event listeners in all cases.
If references to the element or handler still exist, memory cannot be freed.


(c) function () { msg = "hello"; } (no let/const)

❌ Leak / Bug
Reason:
Creates an implicit global variable (window.msg).
The variable stays alive for the lifetime of the page unless explicitly removed.


(d) useEffect(() => {
       const id = setInterval(...);
       return () => clearInterval(id);
   }, []);

✅ Safe
Reason:
The cleanup function runs when the component unmounts and clears the interval, preventing leaks.
*/



// Bonus Sanitise User Input
// Write a safeText(html) that takes an HTML string and returns plain text only (strips tags).
// Test with '<img src=x onerror="alert(1)"> hello'.
// Insert the result into an element with textContent. Confirm no execution.

function safeText(html) {
    const temp = document.createElement("div");
    temp.innerHTML = html;

    return temp.textContent;
}

const input = '<img src=x onerror="alert(1)"> hello';

const result = safeText(input);

const output = document.getElementById("output");
output.textContent = result;

console.log(result);

/*
HTML:

<div id="output"></div>

Output:

 hello

Why no execution?

1. The HTML is parsed inside a temporary element.
2. textContent extracts only the text.
3. Setting output.textContent inserts plain text, not HTML.
4. The <img> tag and its onerror handler are discarded.
5. No alert() runs.
*/