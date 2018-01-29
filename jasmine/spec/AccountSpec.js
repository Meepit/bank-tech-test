describe("Account", function(){
  var account;
  var transactionManager;

  beforeEach(function(){
    transactionManager = {
      createTransaction: function(){},
      showHistory: function(){},
    }

    spyOn(transactionManager, 'createTransaction');
    spyOn(transactionManager, 'showHistory');

    account = new Account(transactionManager);
  })

  describe("#constructor", function(){
    it("Should be initialized with no funds", function(){
      expect(account.getBalance()).toEqual(0.00);
    });

    it("Should be initialized with no credit", function(){
      expect(account.getCredit()).toEqual(0.00);
    })
  })

  describe("#deposit", function(){
    it("Should be allowed to deposit funds and have them added to the balance", function(){
      account.deposit(100);
      expect(account.getBalance()).toEqual(100);
    })
  })

  describe("#withdraw", function(){
    it("Should be allowed to withdraw funds when available", function(){
      account.deposit(100);
      account.withdraw(90);
      expect(account.getBalance()).toEqual(10);
    });

    it("Cannot withdraw funds if insufficient balance and credit", function(){
      expect(function(){
        account.withdraw(50);
      }).toThrow();
    })
  })

  describe("#createTransaction", function(){
    it("Should create a new transaction", function(){
      account.createTransaction();
      expect(transactionManager.createTransaction).toHaveBeenCalled();
    })
  })

  describe("#showHistory", function(){
    it("Should be allowed to see their transaction history", function(){
      account.showHistory();
      expect(transactionManager.showHistory).toHaveBeenCalled();
    })
  })
})
