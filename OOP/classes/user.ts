export class User {
  private _age: number = 0;

  // GET = READ
  public get age() : number {
    return this._age;
  }

  // SET = WRITE/ASSIGN
  public set age(value: number) {
    if (value < 0 || value > 120) {
      throw new Error("Age cannot be negative nor greater than 120: " + value);
    }
    this._age = value;
  }
}
