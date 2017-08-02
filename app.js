var Pusher = require('pusher');
const express = require('express')
const app = express()
const mockData = require('./data');

var pusher = new Pusher({
  appId: '369614',
  key: '7355c0a07d90d62710b0',
  secret: '890d7d2b4263de987f3c',
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
