describe("TransactionManager", function(){
  var transactionManager;
  var transactionPrinter;
  var date;
  var transaction;

  beforeEach(function(){
    transactionPrinter = {

    }

    date = {
      toLocaleDateString: function(){}
    }

    transaction = {
      constructor: function(){},
    }

    spyOn(date, 'toLocaleDateString');
    spyOn(transaction, 'constructor');

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

    it("Records a new transaction", function(){
      transactionManager.createTransaction("credit", 100, 200, date);
      console.log(transactionManager);
      expect(transactionManager.getTransactionHistory().length).toEqual(1);
    })
  })
})
