require('dotenv').config();
const Pusher = require('pusher');
const express = require('express');
const app = express();
const mockData = require('./data');

const pusher = new Pusher({
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
    mockData.basicEvent
  );
}, 6000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-JWT, jwt");
  next();
});

app.get('/events', function (req, res) {
console.log(req.query);
  const timezone = req.query.timezone;
  const timestamp = req.query.timestamp; // for getting history;
  res.json({ initialEvents: [ mockData.basic ] });
})

app.get('/watchlist', function (req, res) {
  res.json({ watchlist: [ mockData.basicItem, mockData.basicItem ] });
});

app.put('/watchlist', function (req, res) {
  res.json(mockData.basicItem);
});

app.listen(7000, function () {
  console.log('Example app listening on port 7000!');
})
