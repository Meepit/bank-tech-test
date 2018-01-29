describe("TransactionManager", function(){
  var transactionManager;
  var transactionPrinter;

  beforeEach(function(){
    transactionPrinter = {

    }

    date = {
      toLocalDateString: function(){}
    }

    spyOn(date, 'toLocalDateString');

    transactionManager = new TransactionManager(transactionPrinter);
  })

  describe("#creatTransaction", function(){
    it("Can record a credit transaction", function(){
      transactionManager.createTransaction(date);
      expect(date.toLocalDateString).toHaveBeenCalled();
    })
  })
})
