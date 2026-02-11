import { CreditCard } from "./creditCard";

export class HSBCCreditCard extends CreditCard {

    constructor(){
        super(); // First do whatever the parent/super constructor
        this.balance = 0; // Then do whatever this (child) constructor does
    }

    public withdraw(amount: number): void{
        this.balance -= amount;
    }

    public deposit(amount: number): void{
        this.balance += amount;
    }
}