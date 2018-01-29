class Transaction{
  constructor(type, amount, newBalance, date){
    this.type = type;
    this.amount = amount;
    this.newBalance = newBalance;
    this.date = date
  }

  getType(){
    return this.type;
  }

  getAmount(){
    return (this.amount).toFixed(2);
  }

  getNewBalance(){
    return (this.newBalance).toFixed(2);
  }

  getDate(){
    return this.date;
  }
}
