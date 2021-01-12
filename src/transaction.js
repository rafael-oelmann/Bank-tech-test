class Transaction {
  constructor(input, balance) {
    this.input = input;
    this.balance = balance;
  }

  generateDate = () => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    return date + "-" + month + "-" + year;
  };

  transactionStatement = () => {
    var date = this.generateDate();
    return date + " || " + this.input + " || " + this.balance;
  };
}

module.exports = Transaction;
