
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Invalid input: Input must be a non-empty string.');
    }
    return input.trim();
}
//referenced error hadnling from w3schools.com//
function errors() {
    try {
        console.log(x); // x is not defined, so its an error//
    } catch (error) {
        console.error("Reference Error: " + error.message);
    }
    try { 
        let arr = Array(-1); // not a valid array length//
        console.log(arr);
    } catch (error) {
        console.error("Range Error: " + error.message);
    }
    try {
    let x = y;
    let y = 5; //y has not been defined before being called//
    } catch(err) {
    let text = err.name;
    console.error("Syntax Error: " + text);}
}

//referenced string helper functions from geeksforgeeks.org and w3schools.com//
function capitalLetter(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input :Please provide a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function reverseString(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input: Please provide a string');
    }
    return str.split('').reverse().join('');
}
function splitIntoWords(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input :Please provide a string');
    }  
    return str.split(' ');
}

//referenced array helper functions from geeksforgeeks.org//
function doubleArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input: Please provide an array');
    }
    return arr.map(n => n * 2);
}
function evenNumbers(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Invalid input: Please provide an array');
    }
    return arr.filter(n => n % 2 === 0);
}
