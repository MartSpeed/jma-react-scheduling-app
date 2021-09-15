console.log('this is JS');

//  incantation setup
//  require() takes a path to a file
let location = require('./locations.js');

for (let locations of location) {
  console.log(`Your appointment will be scheduled in the ${locations} area.`);
}
