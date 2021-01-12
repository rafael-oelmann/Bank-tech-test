const Transaction = require("./transaction");

class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  displayBalance = () => {
    return this.balance;
  };

  displayHistory = () => {
    return this.transactionHistory.reverse();
  };

  depositCash = (amount) => {
    this.balance += amount;
    var input = "+" + JSON.stringify(amount);
    let transaction = new Transaction(input, this.balance);
    this.transactionHistory.push(transaction.transactionStatement());
  };

  withdrawCash = (amount) => {
    this.balance -= amount;
    var input = "-" + JSON.stringify(amount);
    let transaction = new Transaction(input, this.balance);
    this.transactionHistory.push(transaction.transactionStatement());
  };
}

module.exports = Account;
