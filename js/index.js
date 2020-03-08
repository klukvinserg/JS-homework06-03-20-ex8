const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thersday",
  "Friday",
  "Saturday",
  "Sunday"
];
let currDay;
let a;

for (; true; ) {
  a = prompt(
    "Enter day of week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
  );

  currDay = days.indexOf(a);

  if (
    a === "Monday" ||
    a === "Tuesday" ||
    a === "Wednesday" ||
    a === "Thursday" ||
    a === "Friday" ||
    a === "Saturday" ||
    a === "Sunday"
  ) {
    break;
  } else {
    alert("Input incorrect");
    continue;
  }
}

while (confirm(`${days[currDay]}. Do you want to see the next day?`)) {
  currDay = (currDay + 1) % days.length;
}
