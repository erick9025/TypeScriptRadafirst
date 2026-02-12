import { CreditCard } from "../classes/creditCard";
import { HSBCCreditCard } from "../classes/hsbcCreditCard";
import { SantanderCreditCard } from "../classes/santanderCreditCard";
import { TestUtilities } from "../utils/testUtilities";

//let c0 = new CreditCard();
let c1 = new HSBCCreditCard();
let c2 = new SantanderCreditCard();

c1.firstName = "Erick";
c1.lastName = "Jimenez";

c2.firstName = "Luis";
c2.lastName = "Osuna";

// HSBCCreditCard
c1.deposit(9999);
c1.withdraw(150);

// SantanderCreditCard
c2.deposit(500_000);
c2.withdraw(1_500);
c2.deposit(25);

// Jimenez, Erick

// Print balance for both
//c1.balance = 15_000_000; // This SHOULD NOT be allowed (mayor security risk) ENCAPSULATION prevents me from updating/setting the balance from outside
c1.checkBalance();
c2.checkBalance();

TestUtilities.logMessage("c1 First Name: " + c1.firstName);
TestUtilities.logMessage("c1 Last Name: " + c1.lastName);

TestUtilities.logMessage("c2 First Name: " + c2.firstName);
TestUtilities.logMessage("c2 Last Name: " + c2.lastName);

TestUtilities.logMessage("c1 Full Name: " + TestUtilities.returnFullNameFormatted(c1));
TestUtilities.logMessage("c2 Full Name: " + TestUtilities.returnFullNameFormatted(c2));

console.log("----------------------------------------------------------------");

c1.printCardInfo();
c2.printCardInfo();

//console.log("c2 Balance is: " + c2.balance); // This SHOULD NOT be allowed (minor security risk) ENCAPSULATION prevents me from reading/getting the balance from outside

// Dog extends Mammal
// Cat extends Mammal
// Cow extends Mammal