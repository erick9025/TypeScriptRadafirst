import { CreditCard } from "../classes/creditCard";
import { HSBCCreditCard } from "../classes/hsbcCreditCard";
import { SantanderCreditCard } from "../classes/santanderCreditCard";

//let c0 = new CreditCard();
let c1 = new HSBCCreditCard();
let c2 = new SantanderCreditCard();

// HSBCCreditCard
c1.deposit(9999);

// SantanderCreditCard
c2.deposit(500_000);
c2.withdraw(1_500);
c2.deposit(25);

// Print balance for both
console.log("c1 Balance is: " + c1.balance);
console.log("c2 Balance is: " + c2.balance);