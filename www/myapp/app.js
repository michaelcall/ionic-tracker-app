  /**
   * Created by codev on 3/14/17.
   */
  var express = require('express')
  var request = require("request");
  var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2NTYwYjMyNS05YmYyLTRlZTUtODBlZC0xMjZmOTdhNjE5Y2UifQ.VUuQR0sISk_NVA3iK0GOmur78w90ki61wH6WFujBYME'
  var app = express()

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })


  var options = {
    method: 'GET',
    url: 'https://api.ionic.io/auth/test',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  }

  request(options, function(err, response, body) {
    if (err) throw new Error(err);
    console.log(body);
  });

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
