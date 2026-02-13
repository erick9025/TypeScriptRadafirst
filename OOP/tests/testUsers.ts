import { User } from "../classes/user";
import { TestUtilities } from "../utils/testUtilities";

let user1: User = new User();

TestUtilities.logMessage("The INITIAL age of the user is: " + user1.age);

//user1.age = -15;
//user1.age = 300;
user1.age = 25;

TestUtilities.logMessage("The FINAL age of the user is: " + user1.age);