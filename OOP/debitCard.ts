// A class is a blueprint that will be used to generate objects (instances)
class DebitCard {

    // One class can have
    //...1) attributes/properties
    //...2) behavior/methods
    //...3) constructor

    //........................... ATTRIBUTES ...........................
    public balance: number = 0; // C# or Java: short, int, long, float, double, 
    public firstName: string; // Since this parameter is assigned in the constructor is not necessary anymore to assign it with default value
    public lastName: string;  // Since this parameter is assigned in the constructor is not necessary anymore to assign it with default value
    public cardNumber: string; // 16x  // Since this parameter is assigned in the constructor is not necessary anymore to assign it with default value
    public nip: number = 0;
    public expirationDate : Date = new Date(1990, 1, 1);

    //........................... CONSTRUCTOR ...........................
    constructor(firstName: string, lastName: string, cardNumber: string) { // constructor is the method that will create an instance/object from the class and assign it with params
        //4152000011119876    <--- sample
        //012345679           <--- index (base-0)
        const allowedChars: string[] =  [ "0", "1", "2", "3", "4", "5", "6", "8", "8", "9" ]; // The easiest way is use REGEX (Regular Expressions)        

        if(cardNumber.length !== 16) {
            throw new Error("Card number must be l6 chars long");
        }
        
        for(let index = 0; index < cardNumber.length; index++) {
            const currentChar: string = cardNumber.substring(index);

            // When number = "4152000011119876", first iteration will have a "4"
            if(allowedChars.includes(currentChar)) {
                // Do nothing: all good so far
            }
            else {
                throw new Error("Card number field only supports digits (0-9): " + currentChar);
            }
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.cardNumber = cardNumber;
    }

    // Access modifiers: public, protected or private
    // From LESS RESTRICTIVE to MORE RESTRICTIVE
    // From MORE PERMISIVE to LESS PERMISIVE
    //......................
    // public: Provides access within everywhere (BY DEFAULT in JS/TS)
    // protected: Provides accss within this class and its children
    // private: Provides accss within this class ONLY

    //........................... METHODS ...........................

    // EQUALITY/NON-EQUALITY Comparisons
    // a == b (Java or C#)
    // a != b (Java or C#)
    // a === b (JS/TS)
    // a !== b (JS/TS)

    // ACCESS MODIFIER - NAME - PARAMS() - RETURN TYPE
    public checkBalance(enteredNip: number): void {
        if(enteredNip !== this.nip) {
            throw new Error("Nip entered is incorrect. Please enter the correct one in order to check your balance");
            console.log("This line will NEVER be executed");
        }
        else {
            console.log("Current Balance is: " + this.balance);
        }
    }

    public checkBalance2(enteredNip: number): void {
        if(enteredNip !== this.nip) {
            throw new Error("Nip entered is incorrect. Please enter the correct one in order to check your balance");
        }
        console.log("Current Balance is: " + this.balance);
    }           

    public deposit(amount: number): void{
        //this.balance = this.balance + amount;
        this.balance += amount; // shorter version of above line
    }

    public withdraw(enteredNip: number, amount: number): void{
        if(enteredNip !== this.nip) {
            throw new Error("Nip entered is incorrect. Cannot proceed with withdraw operation");
        }

        //this.balance = this.balance - amount;
        this.balance -= amount; // shorter version of above line
    }
}