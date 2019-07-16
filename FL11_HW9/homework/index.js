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
  let iteratesArray = [];
  let inputArray = arguments[0];
  let inputFunction = arguments[1];

  for (let i = 0; i < inputArray.length; i++) {
    iteratesArray.push(inputFunction(inputArray[i]));
  }
  return iteratesArray;
}

function mapArray(...args) {
  let result = executeforEach(...args);
  return result;
}

function filterArray(...args) {
  let iteratesArray = executeforEach(...args);
  let filteredArray = [];

  for (let i = 0; i < iteratesArray.length; i++) {
    if (iteratesArray[i] === true) {
      filteredArray.push(arguments[0][i]);
    }
  }
  return filteredArray;
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
    if (obj.hasOwnProperty(key)) {
      outputArray.push(key);
    }
  }
  return outputArray;
}

function values(obj) {
  let outputArray = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      outputArray.push(obj[key]);
    }
  }
  return outputArray;
}
