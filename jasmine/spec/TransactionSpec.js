describe("Transaction", function(){
  var transaction;
  var date;

  beforeEach(function(){
    date = {
      toLocaleDateString: function(){
        return "22/06/1994";
      }
    }

    spyOn(date, 'toLocaleDateString').and.returnValue('22/06/1994');
    transaction = new Transaction("debit", 100, 200, date.toLocaleDateString());
  })

  describe("#getters", function(){
    it("Should return the transaction type", function(){
      expect(transaction.getType()).toEqual("debit");
    })

    it("Should return the amount balance changed by to 2dp", function(){
      expect(transaction.getAmount()).toEqual('100.00');
    })

    it("Should return the new balance to 2dp", function(){
      expect(transaction.getNewBalance()).toEqual('200.00');
    })

    it("Should return the date of the transaction in the form dd/mm/yyy", function(){
      expect(transaction.getDate()).toEqual('22/06/1994');
    })
  })
})
