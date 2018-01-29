class Customer{
  constructor(name, account = new Account, transactionPrinter = new TransactionPrinter){
    this.name = name;
    this.account = account;
    this.transactionPrinter = transactionPrinter;
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

  showTransactionHistory(){
    this.transactionPrinter.showHistory();
  }
}
