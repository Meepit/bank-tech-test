describe("TransactionManager", function(){
  var transactionManager;
  var transactionPrinter;
  var date;
  var transaction;

  beforeEach(function(){
    transactionPrinter = {
      printHistory: function(){},
    }

    date = {
      toLocaleDateString: function(){}
    }

    transaction = {
      constructor: function(){},
    }

    spyOn(date, 'toLocaleDateString');
    spyOn(transaction, 'constructor');
    spyOn(transactionPrinter, 'printHistory')

    transactionManager = new TransactionManager(transactionPrinter);
  })

  describe("#getTransaction", function(){
    it("Returns the transactionHistory", function(){
      expect(transactionManager.getTransactionHistory().length).toEqual(0);
    })
  })

  describe("#createTransaction", function(){
    it("Gets the current date", function(){
      transactionManager.createTransaction("credit", 100, 200, date);
      expect(date.toLocaleDateString).toHaveBeenCalled();
    })

    it("Records a new credit transaction", function(){
      transactionManager.createTransaction("credit", 100, 200, date);
      expect(transactionManager.getTransactionHistory().length).toEqual(1);
    })

    it("Records a new debit transaction", function(){
      transactionManager.createTransaction("debit", 100, 0, date);
      expect(transactionManager.getTransactionHistory().length).toEqual(1);
    })
  })

  describe("#displayTransactionHistory", function(){
    it("Should display the transaction history", function(){
      transactionManager.displayTransactionHistory();
      expect(transactionPrinter.printHistory).toHaveBeenCalled();
    })
  })
})
