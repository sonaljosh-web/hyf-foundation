//----------------Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
console.log(names);
// Write some code here
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Ahmad") {
    names.splice(i, 1);
  }
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

//--------------When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calTimeToTravel(travelInformation) {
  let timeInHr = 0;
  timeInHr = travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(timeInHr);
  const minutes = Math.round((timeInHr - hours) * 60);
  //console.log(hours);
  //console.log(minutes);

  const tempObject = {
    hours: hours,
    minutes: minutes,
  };
  //console.log(tempObject);
  return tempObject;
}

let travelTime = calTimeToTravel(travelInformation);
//console.log(travelTime); // 8 hours and 38 minutes
console.log(`${travelTime.hours} hours and ${travelTime.minutes} minutes`);

//--------------Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logoutSeriesDuration() {
  seriesDurations.push({
    title: "Bridgerton",
    days: 0,
    hours: 12,
    minutes: 48,
  });
  const lifespanInYears = 80;
  lifespanInMinutes = 80 * 365 * 24 * 60;
  let totalPercentOfWatching = 0.0;
  for (let i = 0; i < seriesDurations.length; i++) {
    const seriesDurationInMin =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;
    const percentageWatchingTime = Number(
      ((seriesDurationInMin / lifespanInMinutes) * 100).toFixed(6),
    );
    //console.log(percentageWatchingTime);
    totalPercentOfWatching = totalPercentOfWatching + percentageWatchingTime;
    console.log(
      `${seriesDurations[i].title} took ${percentageWatchingTime}% of my life`,
    );
  }
  console.log(`In total that is ${totalPercentOfWatching}% of my life`);
}
logoutSeriesDuration();

//------------------Smart-ease - Back to the basics!
const notes = [];
function saveNote(content, id) {
  notes.push({
    content: content,
    id: id,
  });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
//---Get a note
function getNote(id) {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      const tempObj = notes[i];
      return tempObj;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//-------------------log out notes
function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`,
    );
  }
}

logOutNotesFormatted(); // should log out the text below

//--------------Unique feature
function pinNotes() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id % 2 == 0) {
      notes[i].pinned = true;
    } else {
      notes[i].pinned = false;
    }
  }
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].pinned == true) {
      console.log(notes[i]);
    }
  }
}
pinNotes();

//------------------CactusIO-interactive (Smart phone usage app)
const activities = [];
const usageLimit = 50;
function addActivity(date, activity, duration) {
  var today = new Date();
  activities.push({
    date: today.toLocaleDateString("en-GB"),
    activity: activity,
    duration: duration,
  });
}

addActivity("26/10-19", "FaceBook", 15);
addActivity("26/10-19", "Instagram", 20);
addActivity("26/10-19", "X", 10);
console.log(activities);
//------------Show my status
function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
  } else {
    let usageInMin = 0;
    for (let i = 0; i < activities.length; i++) {
      usageInMin += activities[i].duration;
    }
    console.log(
      `You have added ${activities.length} activities. They amount to ${usageInMin} min. of usage`,
    );
    if (usageInMin >= usageLimit) {
      console.log("You have reached your limit, no more smartphoning for you!");
    }
  }
}
showStatus(activities);
addActivity("26/10-19", "Tiktok", 10);
showStatus(activities);
