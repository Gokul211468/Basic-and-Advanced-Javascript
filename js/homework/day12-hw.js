function safeDivide(a, b) {

    if (b === 0) {
        throw new Error(
            "Division by zero is not allowed"
        );
    }

    return a / b;
}

try {

    console.log(safeDivide(10, 2));

} catch (err) {

    console.log(err.message);

}

try {

    console.log(safeDivide(10, 0));

} catch (err) {

    console.log(err.message);

}


class NotFoundError extends Error {

    constructor(message) {

        super(message);

        this.name = "NotFoundError";

    }

}

function getUserById(id) {

    const validIds = [1, 2, 3];

    if (!validIds.includes(id)) {

        throw new NotFoundError(
            "User not found"
        );

    }

    return `User ${id}`;

}

try {

    console.log(getUserById(2));

    console.log(getUserById(10));

} catch (err) {

    if (err instanceof NotFoundError) {

        console.log(
            "Custom Error:",
            err.message
        );

    } else {

        console.log(
            "Other Error:",
            err.message
        );

    }

}

