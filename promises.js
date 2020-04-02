const axios = require('axios');

// Declare values
var first, second, third;

// Run FIRST api call
axios.get('http://numbersapi.com/1')
  .then(function(res1) {

    // Set response data
    first = res1.data;

    // Run SECOND api call
    return axios.get('http://numbersapi.com/2')
  })
  .then((res2) => {

    // Set response data
    second = res2.data

    // Run THIRD api call
    return axios.get('http://numbersapi.com/3')
  })
  .then((res3) => {

    // Set response data
    third = res3.data

    // Log the responses
    console.log(first + '\n' + second + '\n' + third)
  })
  .catch((err) => {
    console.log('There was an error trying to retreive api data: ' + err)
  })