// Data needed for first part of the section

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    [weekdays[0]]: {
      open: 12,
      close: 22,
    },

    [weekdays[1]]: {
      open: 11,
      close: 23,
    },

    [weekdays[2]]: {
      open: 0,
      close: 12 + 12,
    },
    [weekdays[3]]: {
      close: 12,
    },
  },
};

/*
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day} we open at ${open}`);
}

const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "user array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");
*/
/*
const rest1 = {
  name: "Capri",
  numGuest: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
*/
/*
rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
*/
/*
console.log(rest1);
console.log(rest2);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable 
('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1
 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, 
along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement 
or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
GOOD LUCK 😀

*/
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
BONUS: Create an object called 
'scorers' which contains the names 
of the players who scored as properties, 
and the number of goals as the value. In this game,
it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// BONUS
/*So the solution is to loop over the array, 
and add the array elements as object properties, 
and then increase the count as we encounter a new 
occurence of a certain element*/
/*
const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
//for (const [])
*/
/* 1 ANSWER
const totalScore = Object.entries(game.scored);

for (const [index, player] of totalScore) {
  const result = `GOAL NUMBER ${index}, IS FROM ${player}`;
  console.log(result);
}
*/

/* 2 ANSWER

const probs = Object.values(game.odds);
let avgOdd = 0;
for (const odd of probs) {
  avgOdd += odd;
}

/* 3 ANSWER 
for (const [team, odds] of Object.entries(game.odds)) {
  const result = team === "x" ? `draw` : `victory ${game[team]}`;
  console.log(`Odds of ${result}: ${odds}`);
}

console.log(avgOdd / probs.length);
*/

/* 

// 1 
const [players1, players2] = game.players;
//console.log(players1, players2);

// 2 
const [gk, ...fieldPlayers] = players1;
//console.log(gk, fieldPlayers);

 //3 
const allPlayers = [...players1, ...players2];
//console.log(allPlayers);

// 4 
const players1Final = [...players1, "Thiago", "Counhingo", "Perisic"];
//console.log(players1Final);

// 5 

const {
  odds: { team1, x: draw, team2 },
} = game;

//console.log(team1, draw, team2);

// 6  

function printGoals(...players) {
  //console.log(...players);
  //console.log(`el marcador quedo ${players.length}`);
}

printGoals(...game.scored);

 7 

team1 < team2 && console.log(`Winner is ${game.team1}`);
*/
/*
const weekdays = ["punchline", "tue", "wed"];

const ayyylamaluquera = {
  [weekdays[0]]: [
    "que me dio",
    "en el culo te echo arroz",
    "te lo mamo y te dejo",
    "nonoporelculo no",
    "pegao se quedo",
    "en el arroz te echo culo",
    "con el gato volador",
    "que el culo rompio",
    "se quito",
    "yo SI SE que me dio",
    "yasuo es una mierda de campeon",
  ],
};

const respuestaDefinitiva = [...ayyylamaluquera.punchline];

console.log("Bienvenido a quien quiere ser millonario pregunta numero 1");
console.log("Cual es la rima de la famosa cancion la maluquera");
console.log("ayyyyyyyyyyyyyyyyyy que maluquera");
for (const [i, el] of respuestaDefinitiva.entries()) {
  const abc = (i + 10).toString(36);
  console.log(`${abc}: ${el}`);
}
const hola = "jorge";
nameeqqq = "jorge";

console.log(nameeqqq);
*/
/*
const [oKeys, oEntries, oValues] = [
  Object.keys(restaurant),
  Object.entries(restaurant.openingHours),
  Object.values(restaurant),
];

console.log(oEntries);

for (const [days, { opening, closing }] of oEntries) {
  console.log(
    `We open ${days.length} days of week, which are ${days}, opening at ${opening}, and close at ${closing}`
  );
}
*/
/*
const arrayEx = [
  "Pan",
  "Pan",
  "Pan",
  "pan blandito",
  "pan durito",
  "pan durito",
];
const uniquePancito = [...new Set(arrayEx)];

console.log(uniquePancito);


*/
/*
const rest = new Map();

rest
  .set("open", 11)
  .set("close", 23)
  .set(true, "OPEENNNNNNNNNNNNN")
  .set(false, "WE ARE CLOUSd");

const time = 24;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
*/
/*
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));

console.log(question.get(question.get("correct") === answer));
*/
///////////////////////////////////////
// Coding Challenge #3

/* 

Let's continue with our football betting app! This time, we have a map with a log of the events that 
happened during the game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove 
this event from the game events log.

3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind 
  that a game has 90 minutes)

4. Loop over the events and log them to the console, marking whether it's in the first half or second half 
(after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL 
GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// 4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF]: ${event}`);
}
*/
/*
// 1
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const eventsMinutes = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${eventsMinutes} minutes`);

// Extra
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
*/
/*
const airline = "TAP AirPortugal";
const plane = "A320";

console.log(plane[0]);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.slice(8, 10));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
*/
/*
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  console.log(
    seat.indexOf("B") === -1 && seat.indexOf("E") === -1
      ? "You got lucky"
      : "You got the middle seat"
  );
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("41D");
checkMiddleSeat("23E");
checkMiddleSeat("59C");
checkMiddleSeat("21B");

*/

//Fix capitalization in name
/*
const passenger = "JOnaS";

const fixCaps = function (name) {
  const passengerLower = name.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

fixCaps("JosjkadasjasdEWQEeeejurh");

fixCaps("JosjkiiewWEEIWEEIWEWEWEasdEWQEeeejurh");

*/
/*
const email = "hello@jonas.io";
const loginEmail = "   Hello@Jonas.io   ";

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
*/

//replacing

/*
const priceGB = "288,97*";
const priceUS = priceGB.replace("*", "$").replace(",", ".");
console.log(priceUS);

const announcement = "aaaaaaaaaaaaa door aaaaaaaaa door";

console.log(announcement.replaceAll(/door/g, "gate"));
*/
/*
console.log("a very nice string".split(" "));



console.log(fistName, lastName);
*/
/*
const [firstName, lastName] = "Jorge Villacreces".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");
*/

// Padding
/*
const maskCreditCard = function (number) {
  const str = number + ""; // "544456234234255"
  const total = str.slice(-4); // "4255"
  const lasttotal = total.padStart(str.length, "*"); // "***********4255"
  console.log(lasttotal);
  return total;
};

maskCreditCard(544456234234255);

const message2 = "Bad weather... All departures delayed...";
console.log(message2.repeat(10));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), 
and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCas       ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
*/
/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document.querySelector("button");

button.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const splittedText = text.split("\n");

  for (const [i, value] of splittedText.entries()) {
    [first, second] = value.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    const finish = output.padEnd(20, " ");
    console.log(finish + "✅".repeat(i + 1));
  }
});
*/
/*
console.log(text);

text.addEventListener("")


*/

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🎈" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(
    "40"
  );
  console.log(output);
}
