const axios = require('axios');


// Set api url names
var url = ['http://names.drycodes.com/', 'http://names.drycodes.com/', 'http://names.drycodes.com/']

// Set parameters
var parameters = ['1?nameOptions=boy_names', '1?nameOptions=countries', '1?nameOptions=planets']

// Declare api call function
function apiCall(url, param) {
  return axios(`${url}${param}`)
}

// Declare asynchronous for loop
async function processApiCalls() {
  let result;
  let results = []
  for (let i = 0; i < parameters.length; i ++) {

    // Due to 'await' the for loop will not continue until the apiCall function returns a promise.
    result = await apiCall(url[i], parameters[i])
    results.push(result.data)
  }
  return results;
}

// Declare function that calls on the for loop and will log the results once the loop is finished
async function doStuff() {
  let result = await processApiCalls();
  console.log(result)
}

// Make call to our initial
doStuff();