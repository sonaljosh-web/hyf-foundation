/* v2
let shopName = "Corner Café";
const prices = [35, 42, 28];

shopName = "Corner Coffee";
const itemCount = prices.length;
const total = prices[0] + prices[1] + prices[2];
const vat = total * 0.25;

console.log(shopName + ": " + itemCount + " items");
console.log("Total: " + total + " kr");
console.log("VAT: " + vat + " kr");
*/
/* v3-coffee order
const drink = "Flat white";
const price = 42;
let quantity = 3;
const isTakeaway = true;
const cupFee = 3; // per cup, takeaway only
let stampCard = 8;
// New order: 3 × Flat white (takeaway)
totalPrice(true, quantity);
quantity = 5;
totalPrice(false, quantity);

// Total: 135 kr
function totalPrice(isTakeaway, quantity, price) {
  let totalPrice = 0;
  if((stampCard+quantity)%10){
    //totalPrice = 0;
  } else {
    if (isTakeaway) {
      totalPrice = (price + cupFee) * quantity;
    } else {
      totalPrice = price * quantity;
    }
  }
  //console.log(quantity + "Flat white");
  console.log(`${quantity} Flat white ${isTakeaway}"`);
  console.log("Total: " + totalPrice);
}
*/
/*
function logDiscount(price) {
  console.log(price * 0.8);
}
function getDiscount(price) {
  return price * 0.8;
  console.log("Discount added");
}

const a = logDiscount(100); // ?
const b = getDiscount(100); // ?
console.log(a); // ?
console.log(b); // ?
console.log(getDiscount(50) + 10); // ?
//console.log(logDiscount(50) + 10); // ?
logDiscount(50) + 10; // ?

*/
/*
function getShipping(total, isMember) {
  if (isMember) {
    return 0;
  } else {
    if (total >= 500) {
      //console.log(0);
      return 0;
    } else {
      //console.log(49);
      return 49;
    }
  }
}

function getOrderTotal(basket, isMember) {
  const shipping = getShipping(basket, isMember);
  console.log("Total: " + (basket + shipping));
}

getOrderTotal(300); // want: Total: 349
getOrderTotal(650); // want: Total: 650
*/
/*
function getDeliveryFee(orderTotal, distanceKm, isMember, hour) {
  // return a number
  let deliveryFee = 0;
  if (isMember) {
    return 0;
  }
  if (orderTotal >= 300) {
    deliveryFee = 0;
  } else {
    deliveryFee = 0;
  }
  if (distanceKm > 5) {
    deliveryFee += 20;
  }
  if (hour < 20 && hour > 17) {
    deliveryFee += 10;
  }
  console.log(deliveryFee);
  return deliveryFee;
}

getDeliveryFee(250, 3, false, 12); // 29
getDeliveryFee(250, 8, false, 18); // 59
getDeliveryFee(150, 8, true, 18); // 0
getDeliveryFee(320, 2, false, 18); // 0
*/
/*
function getProgressBar(percent) {
  let progressStr = "----------";
  let tmpStr;
  //tmpStr = progressStr;
  //console.log(Math.floor(percent / 10));
  for (let i = 0; i < Math.floor(percent / 10); i++) {
    progressStr[i].replace("-", "#");
    console.log(progressStr[i].replace("-", "#"));
    console.log(progressStr[i]);
  }
  //console.log(tmpStr);
  return progressStr;
}

console.log(getProgressBar(0));
// [----------] 0%
console.log(getProgressBar(30));
// [###-------] 30%
//console.log(getProgressBar(75));
// [#######---] 75%
//console.log(getProgressBar(100));
// [##########] 100%
*/
/*
let visitors = 0;
function openShop() {
  visitors = visitors + 1;
  const message = "Welcome, visitor " + visitors;
  console.log(message);
}
function closeShop() {
  if (visitors > 0) {
    const goodbye = "Bye, " + visitors + " visitors!";
    console.log(goodbye);
  }
}
openShop();
openShop();
//console.log(message);
closeShop();
*/
/*
const playlist = [
  { title: "Levitating", artist: "Dua Lipa", seconds: 203 },
  { title: "Yellow", artist: "Coldplay", seconds: 266 },
  { title: "Flowers", artist: "Miley Cyrus", seconds: 200 },
  { title: "Houdini", artist: "Dua Lipa", seconds: 185 },
];

function formatTime(seconds) {
  const minTime = Math.floor(seconds / 60);
  let minSec = seconds % 60;
  if (minSec < 10) {
    minSec = "0" + minSec;
  }
  return minTime + ":" + minSec;
}
function getTotalTime(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    console.log(formatTime(playlist[i].seconds));
  }
}
//function getSongsBy(playlist, artist) {
function getSongsBy(playlist) {
  for (let i = 0; i < playlist.length; i++) {
    console.log(
      `${playlist[i].title}  ${formatTime(playlist[i].seconds)}  ${playlist[i].artist}`,
    );
  }
}
getTotalTime(playlist);
getSongsBy(playlist);
*/
/*
const openingHours = {
  monday: { open: 8, close: 17 },
  friday: { open: 8, close: 20 },
  saturday: { open: 10, close: 14 },
  sunday: null,
};
openingHours.tuesday = { open: 8, close: 17 };
openingHours.wednesday = { open: 8, close: 17 };
openingHours.thursday = { open: 8, close: 17 };
function isOpen(day, hour) {
  console.log(openingHours[day].open);
  if (openingHours[day].open >= hour && openingHours[day].close <= hour)
    return true;
}

function getOpeningText(day) {
  let message = "";
  message += `${openingHours[day]}:${openingHours[day].open} }`;
}
isOpen("friday", 19); // true
isOpen("saturday", 15); // false
isOpen("sunday", 12); // false
*/
/*
function getCount(str) {
  let count = 0;
  const charArray = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < charArray[j].length; j++) {
      //console.log(`${str[i]} ${charArray[i]} ${count}`);
      if (str[i] === charArray[j]) {
        count++;
      }
    }
  }
  return count;
}
console.log(getCount("abracadabra"));
*/
/*
function squareDigits(num) {
  let splitDigits = [];
  let digitStr = "";
  while (num > 0) {
    splitDigits.unshift(num % 10);
    num = parseInt(num / 10); // or num = Math.floor(num / 10)
  }
  for (let i = 0; i < splitDigits.length; i++) {
    digitStr += splitDigits[i] * splitDigits[i];
  }
  //console.log(Number(digitStr));
  return Number(digitStr);
}
console.log(squareDigits(12));
console.log(squareDigits(9119));
console.log(squareDigits(3212));
*/
/*
function highAndLow(numbers) {
  let tmpIntArray = [];

  tmpIntArray = numbers.split(" ").map(Number);

  console.log(tmpIntArray);
  let highestNum = tmpIntArray[0];
  let lowestNum = tmpIntArray[0];
  for (let i = 0; i < tmpIntArray.length; i++) {
    if (highestNum < tmpIntArray[i]) {
      highestNum = tmpIntArray[i];
    }
    if (lowestNum > tmpIntArray[i]) {
      lowestNum = tmpIntArray[i];
    }
  }
  console.log(highestNum);
  console.log(lowestNum);
  // ...
}
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
