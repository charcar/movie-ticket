function Ticket(ageInput, movieInput, timeInput) {
  this.ageInput = ageInput;
  this.movieInput = movieInput;
  this.timeInput = timeInput;
  };

function Price(ticketPrice) {
  this.ticketPrice = [ticketPrice];
};

Ticket.prototype.ticketSenior = function() {
  if (ageInput >= 65) {
      console.log(ticketPrice);
    this.ticketPrice = this.ticketPrice/2;
    return this.ticketPrice;

  };
};

Ticket.prototype.ticketOld = function() {
  if (movieInput = "oldMovie")
    return this.ticketPrice = this.ticketPrice - 2;
};


Ticket.prototype.ticketMat = function() {
  if (timeInput = "yesMatinee")
  this.ticketPrice = this.ticketPrice - 3;
    console.log(ticketPrice);
    return
};


$(document).ready(function() {

$("form#new-ticket").submit(function(event) {
  event.preventDefault();


  var ticketPrice = new Price(10);
  var ageInput = $("input#ageInput").val();
  var movieInput = $("option#movieOld").val();
  var timeInput = $("option#yesMatinee").val();

  var newTicket = new Ticket (ageInput,movieInput,timeInput)
  console.log(newTicket);
  console.log(ticketPrice);
  newTicket = newTicket.ticketMat()
  console.log(newTicket);

$("ul#outputPrice").append("<li>" + ticketPrice + "</li>");
  });
});
