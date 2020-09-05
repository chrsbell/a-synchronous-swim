const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => { }) => {
  // console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
  }

  if (req.method === 'GET') {
    // const directions = ['left', 'right', 'up', 'down'];
    // const randIdx = Math.round(Math.random() * (directions.length - 1));
    var temp = messageQueue.dequeue();
    // console.log('Responding to GET: ', temp);
    res.writeHead(200, headers);
    res.end(temp);
  }

  if (req.method === 'POST') {
    console.log(req);
    backgroundImageFile = $('form.file');

  }

  next(); // invoke next() at the end of a request to help with testing!
};
