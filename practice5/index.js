var express = require('express')
var app = express()

app.listen(3000, function() {
  console.log('practice5listen')
})

app.get('/', function(request, response) {
  response.send('hi practice5')
})
