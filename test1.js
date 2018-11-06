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
listAge["John"] = 15; //ok
listAge["sue"] = 20; // listAge[2] = "nine" //error
var drummer = {};
drummer.age = 20;
drummer.instrument = "drums";
console.log("Drummer's age" + drummer.age);
console.log("play" + drummer.instrument);
