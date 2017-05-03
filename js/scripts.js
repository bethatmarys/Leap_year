$(document).ready(function() {
  //
  $("form#leap-year").submit(function(event) {
    //call a leap-year function pass the year as an argument
    event.preventDefault();
    //this will stop the function at the end of the run
    var year = parseInt($("input#year").val());
    //this tells the computer that the user input is a number "parseInt"
    var result = leapYear(year);
    //call the leap year function and pass the year as a parameter
    $("#result").text(result);
    //the result of a true or false
  });
});

    var leapYear = function(year) {
      return false;
    };
    var leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0)) {
        return true;
      } else {
        return false;
      }
    }
