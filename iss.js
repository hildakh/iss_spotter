/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {

  request(`https://api.ipify.org?format=json`, (error, response, body) => {
    if (error) {
      return callback(error);
      //or return callback(error, null);
    }
    if (response.statusCode !== 200) {
      // const msg = `Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`;
      return callback(Error(`Status Code ${response.statusCode} when fetching IP. Reponse: ${body}`));
      //or callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
    }
    const data = JSON.parse(body);
    return callback(null, data['ip']); //making sure that only the ip address is logged as a string
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://ipvigilante.com/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching Coordinates for IP: ${body}`), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body).data;

    callback(null, { latitude, longitude });
  });
};


module.exports = { fetchMyIP, fetchCoordsByIP };