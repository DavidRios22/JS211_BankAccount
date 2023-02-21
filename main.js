'use strict';
const assert = require('assert')

class bankAccount {
    constructor(accountNumber, owner) {
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
    }
    balance() {
        let currentBalance = 0

        for (let i=0; i < this.transactions.length; i++) {
            currentBalance += this.transactions[i].amount
        }
        console.log(currentBalance);
    }

    deposit(amt) {
        if (amt >= 0) {
            let newDeposit = new transaction(amt, "Deposit", this.date)
            this.transactions.push(newDeposit)
        } else {
            console.log("Cannot Deposit")
        }
        
    }

    charge(payee, amt) {
        let newCharge = new transaction(amt, payee, this.date)
        if (newCharge.amt < this.balance) {
            this.transactions.push(newCharge)
        } else {
            console.log("Insufficient Funds");
        }
    }
}

class transaction {
    constructor(amount, payee) {
        this.date = new Date()
        this.amount = amount
        this.payee = payee
    }

}

if (typeof describe === 'function') {

    describe('bankAccount', function () {
        it('Bank Account should have an account number, owners name, and a transaction list.', function () {
            const bankAccount1 = new bankAccount('12345', 'David');
            assert.equal(bankAccount1.accountNumber, '12345');
            assert.equal(bankAccount1.owner, 'David');
            assert.equal(bankAccount1.transactions.length, 0);
        })
    })

    describe('Transaction', function () {
        it('Should create transaction correctly for a deposit', function () {
            const newDeposit1 = new transaction(100, 'Deposit');
            assert.equal(newDeposit1.amount, 100);
            assert.equal(newDeposit1.payee, "Deposit");
        })
    })

    describe('Transaction', function () {
        it('Should create transaction correctly for a charge', function () {
            const newCharge1 = new transaction(50, 'HEB');
            assert.equal(newCharge1.amount, 50);
            assert.equal(newCharge1.payee, "HEB");
        })
    })

}