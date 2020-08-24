/* Stop writing comments - Code must speak for it self */


/* Avoid one-letter variable names */
//! bad code
const q = () => { };

//* best code
const query = () => { };


/* Capitalize constant values SNAKE UPPER CASE */
//! bad code
const second_time = 56738;

//* best code
const SECOND_TIME = 78978;


/* Make booleans that read well in if-then statements */
//! bad code
let car = {
    truck: true,
    jip: false
}

//* best code
let car = {
    isTruck: true,
    isJip: false
}


/* Use PascalCase and nouns for classname */
//! bad code
class house = {
    // ..
}

//* best code
class House = {
    // ..
}


/* Magic numbers */
//! bad code
for (let i = 0; i < 86400; i++) {
    // ..
}

//* best code
const SECOND = 86400;
for (let index = 0; index < SECOND; index++) {
    // ..
}


/* Deep nesting */
//! bad code
const arr = [[['value']]];
arr.forEach(arr1 => {
    arr1.forEach(arr2 => {
        arr2.forEach(value => {
            console.log(value);
        });
    });
});

//* best code
const exampleArray = [[['value']]];
const retrieveFinalValue = (value) => {
    if (Array.isArray(value)) {
        return retrieveFinalValue(value[0]);
    }
    return value;
}
retrieveFinalValue(exampleArray);


/* Avoid large functions */
//! bad code
const addMultipleSubstract = (a, b, c) => {
    const add = a + b + c;
    const multiple = a * b * c;
    const subtract = a - b - c;
    return `${add} ${multiple} ${subtract}`;
}

//* best code
const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;
const subtract = (a, b, c) => a - b - c;


/* Code repetition */
//! bad code
const getUserCredentials = (user) => {
    const name = user.name;
    const surname = user.surname;
    const password = user.password;
    const email = user.email;
}

//* best code
const getUserCredentials = (user) => {
    const { name, surname, password, email } = user;
}