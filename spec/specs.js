describe('Ticket', function() {
  it("will put in a price of a ticket.", function() {
    var testTicket = new Ticket (5);
    expect(testTicket.ticketPrice).to.eql([5]);
  });
});
