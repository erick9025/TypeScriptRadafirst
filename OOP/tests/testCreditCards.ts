import { CreditCard } from "../classes/creditCard";
import { HSBCCreditCard } from "../classes/hsbcCreditCard";
import { SantanderCreditCard } from "../classes/santanderCreditCard";

//let c0 = new CreditCard();
let c1 = new HSBCCreditCard();
let c2 = new SantanderCreditCard();

// HSBCCreditCard
c1.deposit(9999);
c1.withdraw(150);

// SantanderCreditCard
c2.deposit(500_000);
c2.withdraw(1_500);
c2.deposit(25);

// Print balance for both
//c1.balance = 15_000_000; // This SHOULD NOT be allowed (mayor security risk) ENCAPSULATION prevents me from updating/setting the balance from outside
c1.checkBalance();
c2.checkBalance();
//console.log("c2 Balance is: " + c2.balance); // This SHOULD NOT be allowed (minor security risk) ENCAPSULATION prevents me from reading/getting the balance from outside