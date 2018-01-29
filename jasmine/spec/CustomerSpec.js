describe("Player", function() {
  var customer;
  var account;

  beforeEach(function() {
    account = {
      deposit: function(amount){},
      getBalance: function(){return 100},
    }

    spyOn(account, 'deposit');
    customer = new Customer("James", account);
  });

  //demonstrates use of expected exceptions
  describe("#deposit", function() {
    it("Should be able to deposit funds", function(){
      customer.deposit(100);
      expect(account.deposit).toHaveBeenCalled();
    })

    // it("Should be able to withdraw funds", function(){
    //   customer.deposit(100);
    //   customer.withdraw(50);
    // })
    // it("should throw an exception if song is already playing", function() {
    //   player.play(song);
    //
    //   expect(function() {
    //     player.resume();
    //   }).toThrowError("song is already playing");
    // });
  });
});
