describe("TransactionPrinter", function(){
  var printer;
  var transaction;

  beforeEach(function(){
    printer = new TransactionPrinter();
    transaction = {
      getDate: function(){},
      getType: function(){},
      getAmount: function(){},
      getNewBalance: function(){},
    };

    spyOn(transaction, 'getDate').and.returnValue('01/01/2001');
    spyOn(transaction, 'getType').and.returnValue('credit');
    spyOn(transaction, 'getAmount').and.returnValue('100.00');
    spyOn(transaction, 'getNewBalance').and.returnValue('200.00');
  })

  describe("#showHistory", function(){
    it("Should print the transaction history", function(){
      match = "date || credit || debit || balance\n01/01/2001 || 100.00 || || 200.00"
      expect(printer.printHistory([transaction])).toEqual(match);
    })
  })
})
