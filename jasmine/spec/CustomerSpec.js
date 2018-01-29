describe("Player", function() {
  var customer;
  var account;

  beforeEach(function() {
    account = {
      deposit: function(amount){},
      withdraw: function(amout){},
      getBalance: function(){return 100},
    }

    transactionPrinter = {
      showHistory: function(){},
    }

    spyOn(account, 'deposit');
    spyOn(account, 'withdraw');
    spyOn(transactionPrinter, 'showHistory');

    customer = new Customer("James", account, transactionPrinter);
  });

  describe("#deposit", function() {
    it("Should be able to deposit funds", function(){
      customer.deposit(100);
      expect(account.deposit).toHaveBeenCalled();
    })

    // it("should throw an exception if song is already playing", function() {
    //   player.play(song);
    //
    //   expect(function() {
    //     player.resume();
    //   }).toThrowError("song is already playing");
    // });
  });

  describe("#withdraw", function(){
    it("Should be able to withdraw funds", function(){
      customer.withdraw(100);
      expect(account.withdraw).toHaveBeenCalled();
    })
  })

  describe("#showHistory", function(){
    it("Should be able to view their transaction history", function(){
      customer.showTransactionHistory();
      expect(transactionPrinter.showHistory).toHaveBeenCalled();
    })
  })
});
