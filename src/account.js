class Account {
  constructor() {
    this.balance = 0;
  }

  displayBalance = () => {
    return this.balance;
  };

  depositCash = (amount) => {
    this.balance += amount;
  };

  withdrawCash = (amount) => {
    this.balance -= amount;
  };
}

module.exports = Account;
