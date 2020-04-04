const request = require('request');

// Run FIRST api call
request('http://numbersapi.com/1', function(err, res, body1) {     // <==== 1st api callback  func starts here

  // error handling
  if (err) {
    console.log('An error has occured trying to retrive data from first api call')

  } else {
    // Log response
    console.log(body1)
    // On success run our second api call
    request('http://numbersapi.com/2', function(err, res, body2) {   // <=== 2nd api callback func starts here

      // error handling
      if (err) {
        console.log('An error has occured trying to retrive data from first api call')

      } else {
        // Log 2nd response
        console.log(body2)
        // On success run our third api call
        request('http://numbersapi.com/3', function(err, res, body3) {  // <=== 3rd api callback func ends here

          // error handling
          if (err) {
            console.log('An error has occured trying to retrive data from first api call')

          } else {
            // Log 3rd response
            console.log(body3)
          }

        })  // <=== 3rd api callback func ends here
      }
    })  // <=== 2nd api callback func ends here
  }
})   //<=== 1st api callback func ends here
