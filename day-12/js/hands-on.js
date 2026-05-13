// Task 1: Safe JSON Parse
function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.log("Invalid JSON: " + e.message);
    return null;
  }
}

// Task 1 — expected results:
// safeParse('{"name":"Priya"}')  -> { name: "Priya" }
// safeParse('{"name":"Priya"')  -> null; console logs "Invalid JSON: " + e.message (e.g. Unexpected end of JSON input)

const jsonInput = document.querySelector("#json-input");
const safeParseBtn = document.querySelector("#safe-parse-btn");
const jsonOutput = document.querySelector("#json-output");
const jsonValidBtn = document.querySelector("#json-valid-sample");
const jsonBrokenBtn = document.querySelector("#json-broken-sample");

function showParseResult(str) {
  const parsed = safeParse(str);
  if (parsed === null) {
    jsonOutput.innerHTML = "<span style='color:red'>Parsed: null (see console)</span>";
  } else {
    jsonOutput.innerHTML =
      "<span style='color:green'>OK: " + JSON.stringify(parsed) + "</span>";
  }
}

if (safeParseBtn && jsonInput) {
  safeParseBtn.addEventListener("click", function () {
    showParseResult(jsonInput.value);
  });
}
if (jsonValidBtn) {
  jsonValidBtn.addEventListener("click", function () {
    jsonInput.value = '{"name":"Priya"}';
    showParseResult(jsonInput.value);
  });
}
if (jsonBrokenBtn) {
  jsonBrokenBtn.addEventListener("click", function () {
    jsonInput.value = '{"name":"Priya"';
    showParseResult(jsonInput.value);
  });
}

// Task 2: Throw on Bad Age
function setAge(age) {
  if (typeof age !== "number" || Number.isNaN(age)) {
    throw new Error("Age must be a number");
  }
  if (age < 0 || age > 120) {
    throw new Error("Age must be 0-120");
  }
  return age;
}

// Task 2 — expected results:
// setAge(25)          -> 25
// setAge("twenty")    -> throws Error "Age must be a number"
// setAge(200)         -> throws Error "Age must be 0-120"

const ageInput = document.querySelector("#age-input");
const ageTestBtn = document.querySelector("#age-test-btn");
const ageOutput = document.querySelector("#age-output");

function runSetAgeFromInput() {
  const raw = ageInput.value.trim();
  let ageVal;
  if (raw === "twenty") {
    ageVal = "twenty";
  } else {
    ageVal = Number(raw);
  }
  try {
    const result = setAge(ageVal);
    ageOutput.innerHTML =
      "<span style='color:green'>setAge returned: " + result + "</span>";
  } catch (err) {
    ageOutput.innerHTML =
      "<span style='color:red'>" + err.message + "</span>";
  }
}

if (ageTestBtn) {
  ageTestBtn.addEventListener("click", runSetAgeFromInput);
}

// Task 3: Custom ValidationError on Email
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("Email must include @");
  }
  return email;
}

// Task 3 — expected results:
// validateEmail("priya@example.com") -> "priya@example.com"
// validateEmail("priya-no-at")       -> throws ValidationError; err instanceof ValidationError === true; err.message === "Email must include @"

const emailInput = document.querySelector("#email-validate-input");
const emailTestBtn = document.querySelector("#email-validate-btn");
const emailOutput = document.querySelector("#email-validate-output");

if (emailTestBtn) {
  emailTestBtn.addEventListener("click", function () {
    try {
      const ok = validateEmail(emailInput.value);
      emailOutput.innerHTML =
        "<span style='color:green'>Valid: " + ok + "</span>";
    } catch (err) {
      if (err instanceof ValidationError) {
        emailOutput.innerHTML =
          "<span style='color:orange'>ValidationError: " +
          err.message +
          "</span>";
      } else {
        emailOutput.innerHTML =
          "<span style='color:red'>" + err.message + "</span>";
      }
    }
  });
}
