import { TestUtilities } from "../utils/testUtilities";
import { CreditCard } from "./creditCard";

export class HSBCCreditCard extends CreditCard {

    private static readonly base16x: string = "4152 0024 1234";

    // Non-static methods/variables are OBJECT/instance related (expirationDate, firstName | deposit(), withdraw())
    // Static methods/variables are CLASS related: do not require an object (countCreditCards | printCountCreditCards())

    private static countCreditCards: number = 0;

    constructor(){
        super(); // First do whatever the parent/super constructor
        this.balance = 0; // Then do whatever this (child) constructor does
        
        HSBCCreditCard.countCreditCards++;

        // 3 quote options " ' `
        const last4Digits: string = HSBCCreditCard.countCreditCards.toString().padStart(4, "0");
        this.cardNumber16 = HSBCCreditCard.base16x.replace(/ /g, '') + last4Digits;
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

    public override printCardInfo(): void {
        // Override parent implementation with child implementation
        this.checkBalance();
        TestUtilities.logMessage("El propietario de esta tarjeta HBSC es: " + TestUtilities.returnFullNameFormatted(this));
        TestUtilities.logMessage("El número de tarjeta es: " + this.cardNumber16 + " ...");
    }

    public static printCountCreditCards(): void {
        TestUtilities.logMessage(`Se han creado hasta el momento ${HSBCCreditCard.countCreditCards} tarjetas de crédito HSBC`);
        //TestUtilities.logMessage("Se han creado hasta el momento " + HSBCCreditCard.countCreditCards + " tarjetas de crédito HSBC");
    }
}