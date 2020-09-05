// const $ = require('jquery');

$('body').on('keydown', (event) => {
  var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
  if (arrowPress) {
    var direction = arrowPress[1];
    SwimTeam.move(direction.toLowerCase());
  }
});

console.log('Client is running in the browser!');
// keypress or validMessage => event on server get accept
// SwimTeam.move(direction. )  direction = keypress/valiemessage
// $('body).on('keyserver, (event) => {
 // var serverPress = event.key.match(/Arrow(Up|Down|Left|Right)/);

//})