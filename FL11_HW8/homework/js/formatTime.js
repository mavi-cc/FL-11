function formatTime(minutes) {
  let days = 0;
  let hours = 0;
  const minutesInDay = 1440;
  const minutesInHour = 60;

  days = Math.trunc(minutes / minutesInDay);
  minutes -= minutesInDay * days;

  hours = Math.trunc(minutes / minutesInHour);
  minutes -= minutesInHour * hours;

  return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));
