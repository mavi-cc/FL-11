function getNumbers(s) {
  let r = /\d+/g;
  let numbers;
  let allNumbers = [];

  while ((numbers = r.exec(s)) !== null) {
    for (let i = 0; i < numbers[0].length; i++) {
      allNumbers.push(numbers[0][i]);
    }
  }
  return allNumbers;
}

function findTypes() {
  let allTypes = {};

  for (let i = 0; i < arguments.length; i++) {
    let dataType = typeof arguments[i];
    if (dataType in allTypes) {
      allTypes[dataType] += 1;
    } else {
      allTypes[dataType] = 1;
    }
  }
  return allTypes;
}

function executeforEach() {
  let filteredArray = [];
  let inputArray = arguments[0];
  let inputFunction = arguments[1];

  for (let i = 0; i < inputArray.length; i++) {
    filteredArray.push(inputFunction(inputArray[i]));
  }
  return filteredArray;
}

function mapArray(...args) {
  let result = executeforEach(...args);
  return result;
}

function filterArray(...args) {
  let filteredArray = executeforEach(...args);
  let outputArray = [];

  for (let i = 0; i < filteredArray.length; i++) {
    if (filteredArray[i] === true) {
      outputArray.push(arguments[0][i]);
    }
  }
  return outputArray;
}

function showFormattedDate(date) {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `Date: ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

function canConvertToDate(s) {
  let date = new Date(s);
  return !isNaN(date.getTime());
}

function daysBetween(date1, date2) {
  const hoursInDay = 24;
  const minutesInHour = 60;
  const secondsInMinute = 60;
  const mllisecInSecond = 1000;

  const timeInDay = hoursInDay * minutesInHour * secondsInMinute * mllisecInSecond;

  let difference = date1.getTime() - date2.getTime();
  return Math.round(Math.abs(difference / timeInDay));
}

function getAmountOfAdultPeople(data) {
  const days = 365;
  const years = 18;
  const filteredArray = filterArray(data, function(el) {
    let yearsOld = daysBetween(new Date(el[' birthday ']), new Date()) / days;
    return yearsOld > years
  })
  return filteredArray.length;
}

function keys(obj) {
  let outputArray = [];

  for (let key in obj) {
    outputArray.push(key);
  }
  return outputArray
}

function values(obj) {
  let outputArray = [];

  for (let key in obj) {
    outputArray.push(obj[key]);
  }
  return outputArray
}
