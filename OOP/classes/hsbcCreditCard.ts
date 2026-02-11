import { TestUtilities } from "../utils/testUtilities";
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

    public checkBalance(): void{
        TestUtilities.logMessage("Tu balance actual para tu tarjeta de crédito HSBC es: " + this.formatCurrency(this.balance));
    }
}