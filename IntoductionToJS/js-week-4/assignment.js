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
    const name = command.slice(sliceLength);
    if (userName.toLowerCase() == name) {
      return `you have already told me your name ${name}`;
    }
    userName = name;
    return ` nice to meet you ${name}.`;
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
    if (toDo.length == 0) {
      return `you have nothing in your todo list!`;
    } else {
      return `you have ${toDo.length} todo ${toDo}`;
    }
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
  } else if (lowercaseCommand.startsWith("what is ")) {
    const sliceLength = "what is ".length;
    const tmpStr = lowercaseCommand.slice(sliceLength).replaceAll(" ", "");
    const firstNum = Number(tmpStr[0]);
    const secondNum = Number(tmpStr[2]);
    let resultSum = 0;
    switch (tmpStr[1]) {
      case "+":
        resultSum = firstNum + secondNum;
        break;
      case "-":
        resultSum = firstNum - secondNum;
        break;
      case "*":
        resultSum = firstNum * secondNum;
        break;
      case "/":
        resultSum = firstNum / secondNum;
        break;
    }
    //return resultSum;
    return `${tmpStr} is ${resultSum}`;
  } //set timer
  else if (lowercaseCommand.startsWith("set a timer for ")) {
    const sliceLength_1 = "set a timer for ".length;
    const sliceLength_2 = lowercaseCommand.lastIndexOf(" ");
    const timerNum = Number(
      lowercaseCommand.slice(sliceLength_1, sliceLength_2).trim(),
    );
    const timerStr = lowercaseCommand.slice(sliceLength_2).trim();
    let milliseconds = 0;
    switch (timerStr) {
      case "hour":
      case "hours":
        milliseconds = timerNum * 60 * 60 * 1000;
        break;
      case "minute":
      case "minutes":
        milliseconds = timerNum * 60 * 1000;
        break;
      case "second":
      case "seconds":
        milliseconds = timerNum * 1000;
        break;
    }
    setTimeout(() => {
      console.log("Timer done!");
    }, milliseconds);
    return `Timer set for ${timerNum} ${timerStr}`;
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
console.log(getReply("what is 5 * 7"));
console.log(getReply("Set a timer for 10 seconds"));
console.log(getReply("Give me a random greeting"));
console.log(getReply("testing a command"));
