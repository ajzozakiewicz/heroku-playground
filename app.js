import express from 'express'
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/build/public'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
})
