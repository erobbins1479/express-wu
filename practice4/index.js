var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('practice4listen')
})

app.get('/', function(request, response) {
  response.send('hi practice4')
})
