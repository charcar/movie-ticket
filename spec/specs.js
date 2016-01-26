describe('Ticket', function() {
  it("will create Ticket object with given input values.", function() {
  var testTicket = new Ticket ("x","y","z");
  expect(testTicket.movieName).to.equal("x");
  expect(testTicket.ageRange).to.equal("y");
  expect(testTicket.timeOf).to.equal("z");
  });

  it("will calculate the ticket price for matinee.", function() {
  var testTicket = new Ticket ("x","y","z");
  expect(testTicket.ticketMatinee()).to.equal("Erik Tolentino");
  });
});
