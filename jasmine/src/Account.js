class Account{
  constructor(transactionManager = new TransactionManager){
    this.balance = 0.00;
    this.credit = 0.00;
    this.transactionManager = transactionManager;
  }

  deposit(amount){
    this.balance += amount;
  }

  withdraw(amount){
    this.balance -= amount
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
