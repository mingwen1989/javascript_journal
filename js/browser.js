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
