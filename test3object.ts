//An object is an instance which contains set of key value pairs.
//The values can be scalar values or functions or even array of other objects.
//Syntax:
var object_name = {
    key1: "value1", //scalar value
    key2: "value",
    key3: function() {
        //functions
    },
    key4:["conten1", "conten2"] // collection
}
//Object Literal Notation
var person = {
    firstName:"Hanna",
    lastName:"Smith",
    sayHello:function() { } //Type template
}
person.sayHello = function() {
    console.log("Hello " + person.firstName)
}
person.sayHello() // Hello Hanna

//access the object values
console.log(person.firstName) //Hanna
console.log(person.lastName) //Smith

//Objects as function parameters
var invokeperson = function(obj:{firstName:string, lastName:string}) {
    console.log("First name: " + obj.firstName) 
    console.log("Last name: " + obj.lastName) 
}
invokeperson(person)    // First name: Hanna
                        // Last name: Smith

