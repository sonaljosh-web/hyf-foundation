/*console.log("Hello Sunday");
const age = 5;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log(`you can vote in ${18 - age} years`);
}*/
/*
const randomNumber = 10;
if (randomNumber === 0) {
  console.log("Zero is special");
} else if (randomNumber % 2 === 0) {
  console.log(`number ${randomNumber} is even`);
} else {
  console.log(`number ${randomNumber} is odd`);
}
*/
/*
const balance = -5;
if (balance <= 0) {
  console.log("Please deposit some money!");
} else if (balance > 0 && balance <= 1000) {
  console.log("Your balance is looking okay");
} else if (balance > 1000 && balance <= 3000) {
  console.log("Your balance is looking good");
} else if (balance > 3000 && balance <= 10000) {
  console.log("Your balance is fantastic");
} else {
  console.log("Your balance is Amazing");
}
*/
/*
const items = 3;
let label;
label = items === 1 ? "item" : "items";

console.log(label);
*/
/*
const age = 12;
const isStudent = 1;
if (age < 12) {
  console.log("free");
} else if (isStudent || age < 18 || age >= 65) {
  console.log("price is 60kr");
} else {
  console.log("price is 120kr");
}*/
/*
function introduce(firstName, cityName = "Copenhagen") {
  console.log(`Hi I'm ${firstName} from ${cityName}`);
}
function logSquare(number) {
  console.log(`${number} squared is ${number * number}`);
}
introduce("sonal", "arhus");
logSquare(9);
*/
/*
function a() {
  return 5;
}
function b() {
  console.log(5);
}
function c(n) {
  return n + 1;
  console.log("c ran");
}

const x = a();
const y = b();
const z = c(c(1));

console.log(x, y, z);
console.log(a() + c(10));
*/
/*
function getVat(price) {
  return price / 4;
}

function getPriceWithVat(price) {
  return price + getVat(price);
}
function getShippingCost(total) {
  if (total >= 500) {
    return 0;
  } else {
    return 49;
  }
}
function getFinalPrice(price) {
  return getPriceWithVat(price) + getShippingCost(getPriceWithVat(price));
}

console.log(getFinalPrice(100));
console.log(getFinalPrice(400));
*/
/*
function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}
logString("hello", 3);
*/
/*
function counting() {
  for (let i = 74; i <= 98; i++) {
    console.log(i);
  }
  for (i = 10; i > 0; i--) {
    console.log(i);
  }
  for (i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}
counting();
*/
/*
const recipients =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohamed@gmail.com";

// This function pretends to send an email
function sendEmailTo(recipient) {
  const emailArray = recipient.split("|");
  for (let i = 0; i < emailArray.length; i++) {
    if (emailArray[i].includes("@")) {
      console.log("email sent to " + emailArray[i]);
    }
  }
}
sendEmailTo(recipients);
*/
//--------Flight booking fullname function & Formal fullname
function getFullName(firstName, surname, useFormalName) {
  let fullName = firstName + " " + surname;
  if (useFormalName == true) {
    fullName = "Lord " + fullName;
    return fullName;
  }
  return fullName;
}
const fullName1 = getFullName("Helena", "Bilan", 1);
const fullName2 = getFullName("Andrew", "Jensen");
console.log(fullName1);
console.log(fullName2);
//----------------Event application
function getEventWeekday(days) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weekday = weekDays[(dayOfWeek + days) % weekDays.length];
  return weekday;
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

//-------------Weather wear
function weatherWear(tempreture) {
  let clothesToWear = "Coat and Winter Cap";
  if (tempreture < 12) {
    clothesToWear = "Coat and Winter Cap";
  } else if (tempreture > 12 && tempreture < 25) {
    clothesToWear = "sweater and cotton trouser";
  } else {
    clothesToWear = "shorts and a t-shirt";
  }
  return clothesToWear;
}
console.log(weatherWear(0));
console.log(weatherWear(13));
console.log(weatherWear(30));

//----------Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (getNumberOfStudents() > 6 && studentName != "Queen") {
    console.log("Cannot add more students to class 07");
    return;
  } else if (studentName.trim() === "") {
    console.log("Cannot add an empty string to a class");
    return;
  } else {
    for (let i = 0; i < class07Students; i++) {
      if (class07Students[i] === studentName) {
        console.log(`Student ${class07Students[i]} is already in the class`);
        class07Students[i] = studentName;
        return;
      }
    }
  }
  class07Students.push(studentName);
  console.log(class07Students);
}

function getNumberOfStudents() {
  // You write code here
  console.log(class07Students.length);
  return class07Students.length;
}
addStudentToClass("Sandra");
//------------------- Candy helper
const boughtCandyPrices = [];
function addCandy(candyType, weight) {
  let candyPrice = 0;
  if (candyType === "sweet") {
    candyPrice = weight * 0.5;
  } else if (candyType === "chocolate") {
    candyPrice = weight * 0.7;
  } else if (candyType === "toffee") {
    candyPrice = weight * 1.1;
  } else if (candyType === "chewing-gum") {
    candyPrice = weight * 0.03;
  }
  boughtCandyPrices.push(candyPrice);
}
addCandy("sweet", 20);
console.log(boughtCandyPrices);
//-----------------Can I buy more?
const amountToSpend = Math.random() * 100;
function canBuyMoreCandy() {
  let totalCandyPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalCandyPrice += boughtCandyPrices[i];
  }
  console.log(
    `Total candy price:${totalCandyPrice} and amount to spend:${amountToSpend}`,
  );
  return totalCandyPrice < amountToSpend;
}

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("toffee", 10);
