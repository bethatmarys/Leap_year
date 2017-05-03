  //Business Logic

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//User Interface Logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    //call a leap-year function pass the year as an argument
    event.preventDefault();
    //this will stop the function at the end of the run
    var year = parseInt($("input#year").val());
    //this tells the computer that the user input is a number "parseInt"
    var result = leapYear(year);
    //call the leap year function and pass the year as a parameter

    $(".year").text(year);

    if (!result) {      //same as writing if(result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    //the result of a true or false

    $("#result").show();
  });
});
