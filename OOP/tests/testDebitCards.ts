import { DebitCard } from "../classes/debitCard";

const card2 = new DebitCard("Jane", "Smith", "9999888877776666");

card2.checkBalance(1234);
card2.deposit(1000);
card2.withdraw(1234, 300);
card2.checkBalance(1234);