class TransactionManager{
  constructor(transactionPrinter = new TransactionPrinter, transactionClass = Transaction){
    this.transactionPrinter = transactionPrinter;
    this.transactionClass = transactionClass;
  }


}
