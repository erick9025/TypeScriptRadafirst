export interface PaymentMethod {
  pay(amount: number): void;
}

export class CreditCardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

export class PayPalPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}