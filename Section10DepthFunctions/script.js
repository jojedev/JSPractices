"use strict";

/* Deep understanding of functions, practices*/
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("VUELO 1", 50, 100);
*/
/*
const flight = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 24739479284,
};

const checkIn = function (flightNum, passsenger) {
  flightNum = "LH999";
  passsenger.name = "Mr. " + passsenger.name;

  if (passsenger.passport === 24739479284) {
    alert("Checked in"); 
    alert("Wrong passport!");
  }
};
checkIn(flight, jonas);

console.log(flight);
console.log(jonas);
*/
/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// Higher-oder function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperFirstWord);S

transformer("Javascript is the best!", oneWord);




const high5 = function () {
  console.log("✨");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);
*/
/*
const upperWord = function (str) {
  return str.toUpperCase();
};

const lowWord = function (str) {
  return str.toLowerCase();
};

const AmayusQuear = function (str, pan, fn) {
  console.log(
    `${str}, ${
      fn.name === "lowWord" ? "ha decidido loweriar" : "ha decidido uperiar"
    } ${fn(pan)}`
  );
};

AmayusQuear("Jorge", "Pan sitoo", upperWord);

AmayusQuear("Luis", "Pan Sitooo", lowWord);

// Callback is a function that gets another function as argument, then it gets executed after any operation
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
*/

/*
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Tim");
greet("Hello")("Jonas");

const priceOfMilk = (priceInHand) => (bottleCost) =>
  console.log(
    `One bottle is ${bottleCost} rupees. So ${priceInHand} rupees will give you ${Math.floor(
      priceInHand / bottleCost
    )} bottles & you'll have ${priceInHand % bottleCost} rupees left`
  );

priceOfMilk(30)(4);
*/
/*
const lufthansa = {
  airline: "Luftyhansa",
  iataCode: "LH",
  bookings: [],
  //book: function() {
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
console.log(lufthansa.bookings);

lufthansa.book(239, "Jorge");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, "Sarah");

book.call(lufthansa, 10, "jorge");

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

console.log(bookEW);

bookLX(23, "Steven Williams");
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jorge Vilacreces");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPLane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPLane.bind(lufthansa));

// Partial application
/*
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));



const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT = addTax(0.23);

console.log(addVAT(10));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of 
replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, 
  increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if 
  the number makes sense 
  (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
HINT: Use many of the tools you learned about in this and the last section 😉
BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
GOOD LUCK 😀
*/
/*
const poll = {
  question: "What is your favorite programming language?",
  options: ["0: Javascript", "1: Python", "2: Rust", "3: C++"],
  //This generates [0,0,0,0].
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    //Get answer
    const userInput = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    // register answer
    typeof userInput === "number" &&
      userInput < this.answers.length &&
      this.answers[userInput]++;

    this.displayResults();
    this.displayResults("string");
  },
  //Log results
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`); 
      // Poll results are 13, 2, 4, 1
    }
  },
};

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

  poll.displayResults.call({ answers: [5, 2, 3], } 'string');
  */
/*
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// Inmediately called function. This is useful if we need data encaptulation.

(function () {
  console.log("This will never run again");
})();

// If we need data privacy on ES6 we can use a block {} this replace whats above this.
{
  const isPrivate = 23;
  var notPrivate = 46;
}
*/
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
