// Take the createEmitter from Task 1 and add a once(event, fn)
//  method that auto-unsubscribes after the first emit.

function createEmitter() {
    const events = {};

    return {
        on(event, listener) {
            if (!events[event]) {
                events[event] = [];
            }

            events[event].push(listener);
        },

        off(event, listener) {
            if (!events[event]) return;

            events[event] = events[event].filter(
                l => l !== listener
            );
        },

        once(event, listener) {
            const wrapper = (...args) => {
                listener(...args);
                this.off(event, wrapper);
            };

            this.on(event, wrapper);
        },

        emit(event, ...args) {
            if (!events[event]) return;

            events[event].forEach(listener =>
                listener(...args)
            );
        }
    };
}

const emitter = createEmitter();

emitter.once("hello", msg => {
    console.log("Once:", msg);
});

emitter.emit("hello", "Hi!");
emitter.emit("hello", "Hello again!");
emitter.emit("hello", "Third time!");

/*
Output:

Once: Hi!
*/


// Build a cacheFactory that returns a cache with a configurable TTL (time-to-live). 
// Each entry expires after its TTL.

function cacheFactory(ttl) {
    const cache = new Map();

    return {
        set(key, value) {
            cache.set(key, {
                value,
                expiresAt: Date.now() + ttl
            });
        },

        get(key) {
            const entry = cache.get(key);

            if (!entry) return undefined;

            if (Date.now() > entry.expiresAt) {
                cache.delete(key);
                return undefined;
            }

            return entry.value;
        },

        has(key) {
            const entry = cache.get(key);

            if (!entry) return false;

            if (Date.now() > entry.expiresAt) {
                cache.delete(key);
                return false;
            }

            return true;
        },

        size() {
            return cache.size;
        }
    };
}

const cache = cacheFactory(2000); // 2 seconds TTL

cache.set("user", "Priya");

console.log(cache.get("user")); // immediately

setTimeout(() => {
    console.log(cache.get("user")); // after 3 seconds
}, 3000);

/*
Output:

Priya
undefined
*/