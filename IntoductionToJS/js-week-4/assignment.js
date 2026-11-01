let userName = "";
let toDo = [];
const greetings = [
  "Hello! Have a wonderful day!",
  "Hey there! How are you doing?",
  "Good morning! Keep smiling!",
  "Hi! Hope you're having a great day!",
  "Welcome back! It's great to see you!",
];
function getReply(command) {
  const lowercaseCommand = command.toLowerCase();
  //my name
  if (lowercaseCommand.startsWith("hello my name is ")) {
    const sliceLength = "hello my name is ".length;
    const name = command.slice(sliceLength).trim();
    if (userName.toLowerCase() === name.toLowerCase()) {
      return `You have already told me your name ${userName}`;
    }
    userName = name;
    return `Nice to meet you ${name}`;
  }
  //what is my name
  else if (lowercaseCommand === "what is my name") {
    if (userName == "") {
      return `you have not told me your name yet`;
    } else {
      return `my name is ${userName}`;
    }
  }
  //to do list
  else if (
    lowercaseCommand.endsWith("to my todo") &&
    lowercaseCommand.startsWith("add ")
  ) {
    const sliceLength_1 = "add ".length;
    const sliceLength_2 = " to my todo".length;
    const todoStr = lowercaseCommand
      .slice(sliceLength_1, -sliceLength_2)
      .trim();
    toDo.push(todoStr);
    return `${todoStr} added to your todo`;
  } //what is on my todo list
  else if (lowercaseCommand === "what is on my todo?") {
    if (toDo.length === 0) {
      return "You have nothing in your todo list!";
    }

    const todoItems = toDo.join(" and ");

    return `You have ${toDo.length} todos: ${todoItems}`;
  } //remove items from to do list
  else if (
    lowercaseCommand.endsWith("from my todo") &&
    lowercaseCommand.startsWith("remove ")
  ) {
    const sliceLength_1 = "remove ".length;
    const sliceLength_2 = " from my todo".length;
    const removeStr = lowercaseCommand
      .slice(sliceLength_1, -sliceLength_2)
      .trim();
    const index = toDo.indexOf(removeStr);

    if (index > -1) {
      toDo.splice(index, 1); // Only removes 1 item
      return `Removed ${removeStr} from your todo`;
    } else {
      return ` ${removeStr} is not in your todo`;
    }
  } //what day is today
  else if (lowercaseCommand === "what day is it today?") {
    const today = new Date();

    const year = today.toLocaleDateString("en-GB", { year: "numeric" });
    const month = today.toLocaleDateString("en-GB", { month: "long" });
    const day = today.toLocaleDateString("en-GB", { day: "numeric" });
    return `${day}. of ${month} ${year}`;
  } // Math calculations
  else if (lowercaseCommand.startsWith("what is ")) {
    const expression = lowercaseCommand.slice("what is ".length).trim();
    const match = expression.match(
      /^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/,
    );
    if (!match) {
      return "Sorry, I can only calculate simple math expressions.";
    }
    const firstNum = Number(match[1]);
    const operator = match[2];
    const secondNum = Number(match[3]);
    let result;
    switch (operator) {
      case "+":
        result = firstNum + secondNum;
        break;
      case "-":
        result = firstNum - secondNum;
        break;
      case "*":
        result = firstNum * secondNum;
        break;
      case "/":
        if (secondNum === 0) {
          return "You cannot divide by zero.";
        }
        result = firstNum / secondNum;
        break;
    }
    return `${expression} is ${result}`;
  } //set timer
  else if (lowercaseCommand.startsWith("set a timer for ")) {
    const timerCommand = lowercaseCommand
      .slice("set a timer for ".length)
      .trim();
    const match = timerCommand.match(
      /^(\d+(?:\.\d+)?)\s+(second|seconds|minute|minutes|hour|hours)$/,
    );
    if (!match) {
      return "Please specify a valid time, such as 4 minutes or 10 seconds.";
    }
    const timerNum = Number(match[1]);
    const timerUnit = match[2];
    if (timerNum <= 0) {
      return "Please set a timer for a positive amount of time.";
    }
    let milliseconds;
    switch (timerUnit) {
      case "second":
      case "seconds":
        milliseconds = timerNum * 1000;
        break;
      case "minute":
      case "minutes":
        milliseconds = timerNum * 60 * 1000;
        break;
      case "hour":
      case "hours":
        milliseconds = timerNum * 60 * 60 * 1000;
        break;
    }
    setTimeout(() => {
      console.log("Timer done!");
    }, milliseconds);
    return `Timer set for ${timerNum} ${timerUnit}`;
  } //random greetings
  else if (lowercaseCommand == "give me a random greeting") {
    const indexRandom = Math.floor(Math.random() * greetings.length);
    return greetings[indexRandom];
  }
  return `sorry "${command}" is not recognised`;
}

console.log(getReply("hello my name is Sonal"));
console.log(getReply("what is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 51 * 7"));
console.log(getReply("Set a timer for 10 seconds"));
console.log(getReply("Give me a random greeting"));
console.log(getReply("testing a command"));
