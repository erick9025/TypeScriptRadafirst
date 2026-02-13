import { HSBCCreditCard } from "../classes/hsbcCreditCard";
import { SantanderCreditCard } from "../classes/santanderCreditCard";
import { TestUtilities } from "../utils/testUtilities";

//let c0 = new CreditCard();
HSBCCreditCard.printCountCreditCards();
let c1 = new HSBCCreditCard();
let c1a = new HSBCCreditCard();
let c1b = new HSBCCreditCard();
c1.firstName = "Erick";
c1.lastName = "Jimenez";

let c2 = new SantanderCreditCard();
c2.firstName = "Luis";
c2.lastName = "Osuna";

// HSBCCreditCard
c1.deposit(9999);
c1.withdraw(150);

// SantanderCreditCard
c2.deposit(500_000);
c2.withdraw(1_500);
c2.deposit(25);

// Both
c1.printCardInfo();
c1a.printCardInfo();
c1b.printCardInfo();
c2.printCardInfo();

// HSBC
HSBCCreditCard.printCountCreditCards();