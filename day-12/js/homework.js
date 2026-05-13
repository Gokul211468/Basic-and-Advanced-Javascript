// Exercise 1: safeDivide + try/catch
function safeDivide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

// Demos — wrap in try/catch and log; expected outcomes:
// safeDivide(10, 2)  → 5
// safeDivide(10, 0)  → catch: e.message === "Division by zero"

// Exercise 2: NotFoundError + getUserById
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

function getUserById(id) {
  if (id === 1 || id === 2 || id === 3) {
    return { id: id, name: "User " + id };
  }
  throw new NotFoundError("No user for id " + id);
}

// Demos — use try/catch; branch with err instanceof NotFoundError:
// getUserById(1)   → { id: 1, name: "User 1" }
// getUserById(99)  → catch: NotFoundError, err.message === "No user for id 99"
