console.log('this is JS');

const sTime = new Date(2021, 8, 14);
const eTime = new Date(2021, 8, 15);

//  incantation setup
//  require() incantation
let location = require('./locations.js');

// location.csv database incantation
for (let locations of location) {
  console.log(`Your appointment will be scheduled in the ${locations} area.`);
}

//  time for the scheduling
//  function for the time between jobs
function time(endTime, startTime) {
  /*
       using the js date formatting methods to extract the time between
       the last appointment and the upcoming appointment
  */

  const yearDifference = endTime.getFullYear() - startTime.getFullYear();
  const monthDifference = endTime.getMonth() - startTime.getMonth();
  const dateDifference = endTime.getDate() - startTime.getDate();
  const hourDifference = endTime.getHours() - startTime.getHours();
  const minuteDifference = endTime.getMinutes() - startTime.getMinutes();
  const secondDifference = endTime.getSeconds() - startTime.getSeconds();

  return `You have ${yearDifference} year, ${monthDifference} months, ${dateDifference} days, ${hourDifference} hours, ${minuteDifference} minutes, and ${secondDifference} seconds`;
}

let timeDifference = time(eTime, sTime);
console.log(timeDifference, `until the next available appointment.`);
