const request = require('request');

// Run FIRST api call
request('http://numbersapi.com/1', function(err, res, body1) {

  // error handling
  if (err) {
    console.log('An error has occured trying to retrive data from first api call')

  } else {

    // On success run our second api call
    request('http://numbersapi.com/2', function(err, res, body2) {

      // error handling
      if (err) {
        console.log('An error has occured trying to retrive data from first api call')

      } else {

        // On success run our third api call
        request('http://numbersapi.com/3', function(err, res, body3) {

          // error handling
          if (err) {
            console.log('An error has occured trying to retrive data from first api call')

          } else {

            // On success print all three of our api results together
            console.log(body1 + '\n' + body2 + '\n' + body3)
          }

        })
      }
    })
  }
})

/*  Gonna show how to deal with async functions in for loops

First start off with the idea of forloops.


*/