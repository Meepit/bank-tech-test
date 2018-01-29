class Customer{
  constructor(name, account = new Account){
    this.name = name;
    this.account = account;
  }

  getBalance(){
    return this.account.getBalance();
  }

  deposit(amount){
    this.account.deposit(amount);
  }

  withdraw(amount){
    this.account.withdraw(amount);
  }
}
