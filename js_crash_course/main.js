// alert('Hello');
// console.log("Hello world");
// console.error("This is an error");
// console.warn("This is a warn");

// var let, const
// var is globally scope

// always use const unless you know that you're going to reassign it
// let age = 30;
// age = 31;

// console.log(age);


// data types
// primitive data types
// String, Number, Boolean, null, undefined, Symbol

// const name = 'John';
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof isCool);

const name = 'John';
const age = 30;
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const s = 'hello world!';
console.log(s.substring(0, 5).toUpperCase());


const array = 'tech, computers, it, code';
console.log(array.split(', '));

// arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears']
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('bananas');
fruits.pop();

console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(Array.isArray('banana'));

console.log(fruits.indexOf('oranges'));


// object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'Etruria',
        city: 'Seattle',
        state: 'WA'
    }
}

console.log(person.firstName, person.hobbies[1], person.address.city);

const { firstName, lastName, address: {city}} = person;
console.log(firstName);
console.log(city);


person.email = 'john@gmail.com';
console.log(person);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

const todoJson = JSON.stringify(todos);
console.log(todoJson);

// For loop
for (let i = 0; i <= 10; i++) {
    console.log(`For loop num: ${i}`);
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// for (let todo of todos) {
//     console.log(todo.text);
// }

// // forEach, map, filter
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });


const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);

const x = '10';
const y = 10;
// double equal doesn't match data type
// triple equals match data type
if (x === '10') {
    console.log('x is 10');
}

const z = 4;
// also matches the type, always matches type and use ===
if (z > 5 || y > 10) {
    console.log('z is 10');
} else if (z > 10) {
    console.log('z is greater than 10');
} 
else {
    console.log('z is not 10');
}


const color = z > 10 ? 'red' : 'blue';
console.log(color);

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}



function addNums(num1 = 1, num2 = 1) {
    console.log(num1 + num2);
    return num1 + num2;
}

addNums(5, 4);
addNums();

console.log(addNums(5, 4));


const addNum = (num1 = 1, num2 = 1) => num1 + num2;


console.log(addNum(100, 10));


// // constructor function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }



class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}



// instantiate object

const person1 = new Person('Q', 'N', '4-3-1997');
const person2 = new Person('Scott', 'H', '4-3-1970');

console.log(person1.dob.getFullYear());
console.log(person2);

console.log(person1.getBirthYear());
console.log(person2.getFullName());

console.log(person2);