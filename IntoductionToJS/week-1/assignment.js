/*............Age-ify (A future age calculator).................*/
const yearOfBirth = 1987;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

/*..........Goodboy-Oldboy (A dog age calculator)..............*/
const dogYearBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearBirth;
let shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${7 * dogYear} dog years old in ${dogYearFuture}`,
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`,
  );
}

/*..........Housey pricey (A house price estimator)..............*/
let width, depth, height;
let volumeInMeters, gardenSizeInM2;
let housePrice, paidHousePrice;
//Peter house price
width = 8;
depth = 10;
height = 10;
gardenSizeInM2 = 70;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
paidHousePrice = 2500000;
if (paidHousePrice > housePrice) {
  console.log(
    `Peter is paying ${paidHousePrice - housePrice} more than the actual house price`,
  );
} else if (paidHousePrice < housePrice) {
  console.log(
    `Peter is paying ${housePrice - paidHousePrice} lesser than the actual house price`,
  );
} else {
  console.log("Peter is paying correct price for the house");
}
//Julia
width = 5;
depth = 11;
height = 8;
volumeInMeters = width * depth * height;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
paidHousePrice = 1000000;
if (paidHousePrice > housePrice) {
  console.log(
    `Julia is paying ${paidHousePrice - housePrice} more than the actual house price`,
  );
} else if (paidHousePrice < housePrice) {
  console.log(
    `Julia is paying ${housePrice - paidHousePrice} less than the actual house price`,
  );
} else {
  console.log("Julia is paying correct price for the house");
}

/*..........Ez Namey (Startup name generator)..............*/
const firstWords = [
  "Nova",
  "Bright",
  "Blue",
  "Next",
  "Smart",
  "Fresh",
  "Clear",
  "Pure",
  "Bold",
  "Rise",
];
const secondWords = [
  "Labs",
  "Tech",
  "Works",
  "Hub",
  "Studio",
  "Solutions",
  "Systems",
  "Digital",
  "Ventures",
  "Innovations",
];

const randomNumber_1 = Math.floor(Math.random() * 10);
const randomNumber_2 = Math.floor(Math.random() * 10);
let startupName =
  firstWords[randomNumber_1] + " " + secondWords[randomNumber_2];

console.log(
  `The startup: ${startupName} contains ${startupName.length} characters`,
);
