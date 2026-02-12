export class MathOperations {
    public sum(num1: number, num2: number) : number {
        return num1 + num2;
    }

    /*
    Conventional overloading not possible on JS/TS
    public sum(str1: string, str2: string) : string {
        return str1 + str2;
    }
    */

    // Overloading in TS/Js first declare without body
    public sumWithOverloading(item1: number, item2: number): number;
    public sumWithOverloading(item1: string, item2: string): string;
    
    // Then declare with body
    public sumWithOverloading(item1: number | string, item2: number | string): number | string {
        if (typeof item1 === "number" && typeof item2 === "number") {
            return item1 + item2;
        }

        if (typeof item1 === "string" && typeof item2 === "string") {
            return item1 + item2;
        }

        throw new Error("Invalid argument types");
    }
}