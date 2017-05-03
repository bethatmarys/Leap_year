$(document).ready(function() {
  //
  $("form#leap-year").submit(function(event) {
    //call a leap-year function pass it the year as an argument
    event.preventDefault();
    //this will stop the function at the end of the run
    var year = parseInt($("input#year").val());
    //
    var result = leapYear(year);
    //call the leap year function and pass it the year
    $("#result").text(result);
    //the result of a true or false
  });
});

var leapYear = function(year) {
  return false;
};
