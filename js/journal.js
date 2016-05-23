var moment = require('moment');

exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
}

var moment = moment().format();

exports.Entry.prototype.read = function() {
  return "Journal Entry: " + this.title + "<br>" + moment + "<br>" + " Dear Diary, " + this.body + "<br><br>";
}
