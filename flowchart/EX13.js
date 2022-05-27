let number = +prompt("insert a number");
let months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "July",
  "August",
  "september",
  "october",
  "november",
  "december",
];
let seasons = ["spring", "summer", "autumn", "winter"];
let month, season, day;
if (number <= 30) {
  month = "january";
  season = "spring";
  day = number;
} else {
  month = months[Math.floor(number / 30) - 1];
  season = seasons[Math.floor(Math.floor(number / 30) / 3)];
  day = number - Math.floor(number / 30) * 30;
  if (day === 0) {
    day = 30;
  }
}
console.log(month, season, day);
