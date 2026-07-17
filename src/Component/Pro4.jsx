import { useState } from "react";

class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Balance after Deposit: ₹${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient Balance";
        }

        this.balance -= amount;
        return `Balance after Withdrawal: ₹${this.balance}`;
    }
}

function Pro4() {

    const [accountHolder, setAccountHolder] = useState("");
    const [balance, setBalance] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const depositMoney = () => {

        const account = new BankAccount(accountHolder, Number(balance));

        const output = account.deposit(Number(amount));

        setBalance(account.balance);
        setResult(output);
    };

    const withdrawMoney = () => {

        const account = new BankAccount(accountHolder, Number(balance));

        const output = account.withdraw(Number(amount));

        setBalance(account.balance);
        setResult(output);
    };

    return (
        <div>
            <h1>4. Bank Account</h1>

            <input
                type="text"
                placeholder="Account Holder"
                value={accountHolder}
                onChange={(e) => setAccountHolder(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Current Balance"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <br /><br />

            <button onClick={depositMoney}>
                Deposit
            </button>

            &nbsp;

            <button onClick={withdrawMoney}>
                Withdraw
            </button>

            <h3>{result}</h3>
        </div>
    );
}

export default Pro4;