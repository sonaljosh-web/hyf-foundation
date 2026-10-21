const firstName = "Sonal";
let year = 2026;
console.log(`I am ${firstName} and i am  learning HYF in the year${year}`);
const chair = {
  material: "wood",
  color: "brown",
  occupied: false,
  legs: 4,
  height: 1.2,
};

const numberOfPeople = 15;
const compare = numberOfPeople > 10;
if (compare) {
  console.log("The number of people in the room are more than 10");
} else {
  console.log("The number of people in the room are less than 10");
}
const totalStudents = 12;
const minStudents = 10;
const minTeachers = 1;
let studentsPresent = 8;
let teachersPresent = 2;
let canStartClass = studentsPresent >= minStudents;
canStartClass =
  (studentsPresent >= minStudents && teachersPresent >= minTeachers) ||
  studentsPresent >= totalStudents;
console.log(`Can the class start: ${canStartClass}`);
console.log(typeof ("hello " + 23));
console.log(typeof ("hello " + "23"));
console.log(typeof 23);
console.log(typeof "23");
