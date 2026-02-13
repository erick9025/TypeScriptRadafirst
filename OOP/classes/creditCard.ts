// In an abstract CLASS you can
//... 1) Just define the methods signatures using the ABSTRACT keyword, with NO IMPLEMENTATION (body)
//... 2) Define the methods along with some implementation

import { TestUtilities } from "../utils/testUtilities";

// RULE: An abstract class can NOT be instantiated (you cannot create an object)

export abstract class CreditCard{
    protected balance!: number; // "!" lets the language/machine know that this variable may not be initialized
    public firstName!: string;
    public lastName!: string;
    public cardNumber16!: string;
    public expirationDate!: Date;

    public abstract withdraw(amount: number): void;
    public abstract deposit(amount: number): void;
    public abstract checkBalance(): void;

    public returnTodaysDate(): string {
        const todaysDate: Date = new Date(); // Default DATE constructor returns now's date
        return todaysDate.toUTCString();
    }

    protected formatCurrency(value: number): string {
        return TestUtilities.formatCurrency(value);
    };

    public printCardInfo(): void {
        this.checkBalance();
        TestUtilities.logMessage("Full name: " + TestUtilities.returnFullNameFormatted(this));
    }
}