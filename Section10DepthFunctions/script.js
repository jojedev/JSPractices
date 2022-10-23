"use strict";
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
