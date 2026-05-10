//Task 1 Safe JSON Parse

function safeParse(str){
    try {
        return JSON.parse(str)
    } catch (error) {
        console.log("Invalid JSON")
        return null;
    }
}

console.log(safeParse('{"name":"Priya"}'));
console.log(safeParse('{"name":"Priya"'));


//Task 2 Throw on Bad Age

function setAge(age){
    if(typeof(age) !== "number"){
        throw new Error("Age must be a number");
    }

    if(age < 0 || age > 120){
        throw new Error("Age must be 0–120")
    }

    else return age;
}

try {
    console.log(setAge(25))
    console.log(setAge("twenty"))
    console.log(setAge(200))
} catch (error) {
    console.log("caught:",error.message)
}


//Task 3 Custom ValidationError on Email.

class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "Validation Error"
    }
}

function validateEmail(email){
    if(!email.includes("@")){
        throw new ValidationError("invalid email")
    }
    return email;
}

try {
    console.log(validateEmail("priya@example.com"))
    console.log(validateEmail("priya-no-at"))
} catch (error) {
    if(error instanceof ValidationError){
        console.log(error.message)
    }
}


