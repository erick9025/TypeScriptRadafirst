import { PaymentMethod, CreditCardPayment, PayPalPayment } from "../classes/financialObjects";

function processPayment(method: PaymentMethod, amount: number) {
  method.pay(amount); // behavior depends on the concrete class
}

processPayment(new CreditCardPayment(), 100);
processPayment(new PayPalPayment(), 200);