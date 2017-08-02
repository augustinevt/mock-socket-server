const basic = {
    _id : "5596e4be0e4dc9544c000001",
    verb : "view",
    _type : "ActivityStreams::Activity",
    updated_at : 1435952319581,
    created_at : 1435952319581,


    object : {
      title: "Growth Rate Erosion Detected",
      image: "https://media.mnn.com/assets/images/2016/02/ducks-mandarin-male.jpg.838x0_q80.jpg",
      seen_by_users: ["5596e4be0e4dc9544c000002", "559637837e4dc9544c000002"],
      // this would be handy for badges, but requires the service to send the current user's id once connected...

      assigned_to: {
        _id: "5596e4be0e4dc9544c000002",
        display_name: "Orville Wright"
      },

      assigned_by: {
        _id: "5596e4be0e4dc9544c000002",
        display_name: "Percival Wright"
      },

      alert_level: "success",

      data: [
        {
          name: "Growth Rate",
          data: [
            {x: 1435952319581, y: 34 },
            {x: 1435952319581, y: 37 }
          ]
        }
      ],

      call_to_action: {
        text: "Click Here for More!",
        link: "http://google.com",
      },

      _id : "5596e4be0e4dc9544c000003",
      _type : "ActivityStreams::Article",
      content : "This is the story of A & B"
    },

    actor : {
      _id : "5596e4be0e4dc9544c000002",
      _type : "ActivityStreams::Person",
      display_name : "Monica Wilkinson"
      }
}

module.exports = basic;


// const mockData = require('./data');
//
// var mockArr = [
//     {
//       text: "Margin Erosion Detected",
//       image: "http://i2.cdn.turner.com/money/dam/assets/121018085553-amd-chart-tablet-large.png",
//       type: "danger",
//       link: "http://localhost:3000/trends"
//     },
//
//
//     {
//       text: "Stock Outage Imminent",
//       image: "https://pixel.nymag.com/imgs/daily/strategist/2017/05/08/Fidget-Spinners/Wheel-spinner.w710.h473.2x.jpg",
//       type: "warning",
//       link: "http://localhost:3000/profit"
//     },
//
//     {
//       text: "Highest Revenue Week Ever!",
//       image: "https://s-media-cache-ak0.pinimg.com/736x/19/ec/3b/19ec3bd2e74d8e84676ff2bc0b34c98e--weight-loss-plans-funny-posters.jpg",
//       type: "success",
//       link: "http://localhost:3000/dashboard"
//     },
//   ];
//
//
