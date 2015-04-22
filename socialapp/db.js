
var mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost/social', function () {
    console.log('connected to data base');
  }
);

module.exports = mongoose;

 
