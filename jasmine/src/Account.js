class Account{
  constructor(){
    this.balance = 0.00;
    this.credit = 0.00;
  }

  deposit(amount){
    this.balance += 100;
  }

  getBalance(){
    return this.balance;
  }

  getCredit(){
    return this.credit;
  }
}
