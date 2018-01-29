class TransactionPrinter{

  printHistory(transactionList){
    var header = "date || credit || debit || balance";
    var returnStr = "";
    for(var i = 0; i < transactionList.length; i++){
      returnStr += "\n";
      returnStr += transactionList[i].getDate();
      if(transactionList[i].getType() == "credit"){
        returnStr += " || " + transactionList[i].getAmount();
      } else {
        returnStr += " || || " + transactionList[i].getAmount();
      }
      returnStr += " || " + transactionList[i].getNewBalance();
    }
    return header+returnStr;
  }
}
