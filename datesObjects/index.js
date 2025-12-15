
// Date(year,month,day ,hour ,minute , seconds ,ms)
const date3 = new Date(2024, 0, 1, 2, 3, 4, 5); //Mon Jan 01 2024 02:03:04 GMT+0200 (Eastern European Standard Time)
const date1 = new Date("2024-01-02T12:00:00Z");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(date);

console.log(date1);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);