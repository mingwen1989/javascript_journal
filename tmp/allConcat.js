var Entry = require("./../js/journal.js").Entry;

$(document).ready(function() {
  $('form#journalinput').submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();

    var newEntry = new Entry(title, body);
    $(".diaryEntry").append(newEntry.read());
    $(".entry").show();
  });
});

var moment = require('moment');

exports.Entry = function(title, body) {
  this.title = title;
  this.body = body;
}

var moment = moment().format();

exports.Entry.prototype.read = function() {
  return "Journal Entry: " + this.title + "<br>" + moment + "<br>" + " Dear Diary, " + this.body + "<br><br>";
}
