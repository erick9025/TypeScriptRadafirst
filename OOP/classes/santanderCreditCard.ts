import { CreditCard } from "./creditCard";

export class SantanderCreditCard extends CreditCard {

    constructor(){
        super(); // First do whatever the parent/super constructor
        this.balance = 0; // Then do whatever this (child) constructor does
    }

    public withdraw(amount: number): void{
        this.balance -= amount;
        console.log("Your new balance after withdrawing for your Santander credit card is: " + this.balance);
    }

    public deposit(amount: number): void{
        this.balance += amount;
        console.log("Your new balance after depositing for your Santander credit card is: " + this.balance);
    }
}