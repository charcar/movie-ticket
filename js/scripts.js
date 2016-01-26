function Ticket(ticketNum) {
  this.ticketNum = ticketNum;
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

// Ticket.prototype.ticketSenior = function() {
//   return //this ticket price /2
// }
//
// Ticket.prototype.ticketOld = function() {
//   return //this ticketprice -5
// }
