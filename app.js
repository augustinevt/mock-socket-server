require('dotenv');
var Pusher = require('pusher');
const express = require('express')
const app = express()
const mockData = require('./data');

var pusher = new Pusher({
  appId: process.env.PUSHER_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'us2',
  encrypted: true
});

setInterval(function () {
  pusher.trigger(
    'my-channel',
    'my-event',
    // mockArr[ Math.floor( Math.random() * mockArr.length)]
    mockData.basic
  )
}, 6000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-JWT, jwt");
  next();
});

app.get('/events', function (req, res) {
console.log(req.query)
  res.json({meow: "ME-OW"})
})

app.listen(7000, function () {
  console.log('Example app listening on port 7000!')
})
