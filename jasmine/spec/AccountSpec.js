describe("Account", function(){
  var account;

  beforeEach(function(){
    account = new Account();
  })

  describe("#constructor", function(){
    it("Should be initialized with no funds", function(){
      expect(account.getBalance()).toEqual(0.00);
    })
  })
})
