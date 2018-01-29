class TransactionManager{
  constructor(transactionPrinter = new TransactionPrinter, transactionClass = Transaction){
    this.transactionPrinter = transactionPrinter;
    this.transactionClass = transactionClass;
    this.transactionHistory = [];
  }

  createTransaction(type, amount, newBalance, date = new Date){
    date = date.toLocaleDateString('en-GB');
    var transaction = new this.transactionClass(type, amount, newBalance, date);
    this._recordTransaction(transaction);
  }

  getTransactionHistory(){
    return this.transactionHistory;
  }

  showHistory(){
    return this.transactionPrinter.printHistory(this.getTransactionHistory());
  }

  _recordTransaction(transaction){
    this.transactionHistory.push(transaction);
  }

}
