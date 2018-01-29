describe("Player", function() {
  var customer;
  var account;

  beforeEach(function() {
    account = {
      deposit: function(amount){},
      withdraw: function(amount){},
      getBalance: function(){},
      getCredit: function(){},
    }

    transactionPrinter = {
      showHistory: function(){},
    }

    spyOn(account, 'deposit');
    spyOn(account, 'withdraw');
    spyOn(account, 'getBalance');
    spyOn(account, 'getCredit');

    spyOn(transactionPrinter, 'showHistory');

    customer = new Customer("James", account, transactionPrinter);
  });

  describe("#deposit", function() {
    it("Should be able to deposit funds", function(){
      customer.deposit(100);
      expect(account.deposit).toHaveBeenCalled();
    })
  });

  describe("#getBalance", function(){
    it("Should be able to view their balance", function(){
      customer.getBalance();
      expect(account.getBalance).toHaveBeenCalled();
    })
  })

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

  describe("#credit", function(){
    it("Can view their credit limit", function(){
      customer.getCredit();
      expect(account.getCredit).toHaveBeenCalled();
    })
  })
});
