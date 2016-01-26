describe('Ticket', function() {
  it("will make a ticket object.", function() {
    var testTicket = new Ticket ("ticket1");
    expect(testTicket.ticketNum).to.equal("ticket1");
  });
});

describe('Price', function() {
  it("will put in a price of a ticket.", function() {
    var testPrice = new Price (5);
    expect(testPrice.ticketPrice).to.eql([5]);
  });

  it("will subtract ticketPrice by 2.", function() {
    var testPrice = new Price (5);
    expect(testPrice.ticketMatinee()).to.equal(3);
  });

  it("will divide ticketPrice by 2.", function() {
    var testPrice = new Price (10);
    expect(testPrice.ticketSenior()).to.equal(5);
  })
});
