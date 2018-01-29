class Account{
  constructor(transactionManager = new TransactionManager){
    this.balance = 0.00;
    this.credit = 0.00;
    this.transactionManager = transactionManager;
  }

  deposit(amount){
    this.balance += amount;
    this.createTransaction("credit", amount, this.getBalance());
  }

  withdraw(amount){
    if((this.getBalance() + this.getCredit()) - amount < 0){
      throw "Insufficient funds";
    }
    this.balance -= amount;
    this.createTransaction("debit", amount, this.getBalance());
  }

  getBalance(){
    return this.balance;
  }

  getCredit(){
    return this.credit;
  }

  createTransaction(type, amount, newBalance){
    this.transactionManager.createTransaction(type, amount, newBalance);
  }

  showHistory(){
    return this.transactionManager.showHistory();
  }
}
