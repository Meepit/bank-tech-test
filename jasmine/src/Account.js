class Account{
  constructor(transactionManager = new TransactionManager){
    this.balance = 0.00;
    this.credit = 0.00;
    this.transactionManager = transactionManager;
  }

  deposit(amount){
    this.balance += amount;
    //createTransaction()
  }

  withdraw(amount){
    if((this.getBalance() + this.getCredit()) - amount < 0){
      throw "Insufficient funds";
    }
    this.balance -= amount;
    //createTransaction()
  }

  getBalance(){
    return this.balance;
  }

  getCredit(){
    return this.credit;
  }

  createTransaction(){
    this.transactionManager.createTransaction();
  }
}
