var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var password = model.get('password')
	
      bcrypt.hash(password, null, null, function(err, hash) {
	    // Store hash in password DB.
        if(err) {console.log('lol')};
	    model.set('username', username);
	    model.set('password', hash);
	  });
    });
  }
});

module.exports = User;