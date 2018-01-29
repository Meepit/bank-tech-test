class TransactionManager{
  constructor(transactionPrinter = new TransactionPrinter, transactionClass = Transaction){
    this.transactionPrinter = transactionPrinter;
    this.transactionClass = transactionClass;
  }

  createTransaction(date = new Date){
    var dateStr = date.toLocalDateString('en-GB');
    
  }
}
