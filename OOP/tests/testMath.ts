import { MathOperations } from "../classes/mathOperations";

let helper: MathOperations = new MathOperations();

helper.sum(90,7);
// helper.sum("erick" , "jimenez"); // not possible sum method only receives numbers

//console.log(helper.sumWithOverloading(51, "jimenez"));
console.log(helper.sumWithOverloading(51,7));
console.log(helper.sumWithOverloading("erick" , "jimenez"));