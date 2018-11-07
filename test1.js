//commandLine as string
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression
options = { program: "test1", commandline: function () { return "**Hello World"; } };
var fn = options.commandline;
console.log(fn());
var listN = ["John", "Sue", "Bran", "Steve"]; // error. if put 1 inplace of "Sue" is not type string
console.log(listN[1]);
console.log(listN[2]);
var listAge;
var drummer = {};
drummer.age = 20;
drummer.instrument = "drums";
console.log("Drummer's age" + drummer.age);
console.log("play" + drummer.instrument);
var iObj = { v1: 12, v2: 23 };
console.log("child's value1: " + iObj.v1 + ", child's value2: " + iObj.v2);
console.log("value1: " + this.v1 + " value2: " + this.v2); // the "this" here does not work -> value1 = undefined ..
