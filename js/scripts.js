function Ticket(ticketPrice) {
  return this.ticketPrice = ticketPrice;
};

function Price(ticketPrice) {
  this.ticketPrice = [ticketPrice];
};



Price.prototype.ticketMatinee = function() {
  this.ticketPrice = this.ticketPrice - 2;
  return this.ticketPrice;
};

Price.prototype.ticketSenior = function() {
  this.ticketPrice = this.ticketPrice/2;
  return this.ticketPrice;
};

Price.prototype.ticketOld = function() {
  this.ticketPrice = this.ticketPrice - 3;
  return this.ticketPrice;
};


$(document).ready(function() {

$("form#new-ticket").submit(function(event) {
  event.preventDefault();


  var ticketPrice = new Price(10);
  console.log(ticketPrice);
  var ageInput = $("option#seniorOld").val();
  var movieInput = $("option#movieOld").val();

  console.log(ageInput);

  if (ageInput = seniorYes) {
    ticketPrice = ticketPrice.ticketSenior(ticketPrice);
  } else if (movieInput = movieOld) {
    ticketPrice = ticketPrice.ticketOld(ticketPrice);
  } console.log(ticketPrice);


$("ul#outputPrice").append("<li>" + ticketPrice + "</li>");
});
});
