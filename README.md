# Bank tech test

Here is a simple bank app that I built justing node.js along jasmine as a testing framework 🏦

## User Stories

```
As a client
So I can keep my money secure
I would like to deposit my cash
```

```
As a client
So I can use my money
I would like to withdraw my cash
```

```
As a client
So I can quickly see how much money I have
I would like to my app to display my current balance
```

```
As a client
So I can keep track on my spending
I would like to my app to display my transactions (inc Date)
```

## Class Diagram - Account

![image of a class diagram.](/images/diagram.png "image of a class diagram.")

### Input/Output example

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
