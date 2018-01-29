describe("Account", function(){
  var account;

  beforeEach(function(){
    account = new Account();
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
    })
  })
})
