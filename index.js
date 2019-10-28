const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const {fetchISSFlyOverTimes } = require('./iss');
// const { nextISSTimesForMyLocation } = require('./iss');  

// fetchMyIP((error, ip) => {

//   if (error) {
//     console.log(`Sorry! It didn't work!`, error);
//     return;
//   }
//   console.log(`It worked! Returned IP`, ip);
// });

/* My code which I was strugling with to complete

fetchCoordsByIP((error, ip) => {
  if(error) {
    console.log('Sorry, coords not found', error);
  }
  console.log('Here are the coordinates', ip)
})
*/
//Compass solution

// The code below is temporary and can be commented out.
const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});