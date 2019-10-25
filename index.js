const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {

  if (error) {
    console.log(`Sorry! It didn't work!`, error);
    return;
  }
  console.log(`It worked! Returned IP`, ip);
});

/* My code which I was strugling with to complete

fetchCoordsByIP((error, ip) => {
  if(error) {
    console.log('Sorry, coords not found', error);
  }
  console.log('Here are the coordinates', ip)
})
*/

//Compass solution
fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});
