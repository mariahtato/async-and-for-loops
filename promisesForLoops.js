const axios = require('axios');


for (let i = 0, p = Promise.resolve(); i < 4; i ++) {
  p = p.then(() => {
    return axios.get(`http://numbersapi.com/${i}`)
      .then((res) => {
        console.log(res.data)
      })
  })
}