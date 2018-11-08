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

//You can create and pass an anonymous object on the fly
invokeperson({firstName:"John", lastName:"Do"})    // First name: John
                                                    // Last name: Do        
                                                    
// DUCK-TYPING: 2 objects are considered to be of the same type if both share the same
// set of properties. DUCK-TYPING verifies the presence of certain properties in the
// objects, rather than their actual type, to check their suitability. TypeScript
// compiler implements the DUCK-TYPING system that allows object creation on the fly
// while keeping type safety.
interface IPoint {
    x:number
    y:number
}
function addPoints(p1:IPoint, p2:IPoint):IPoint {
    var x = p1.x + p2.x
    var y = p1.y + p2.y
    return {x:x,y:y}
}
//Valid
var newPoint = addPoints({x:3,y:4},{x:5,y:1})
console.log(newPoint) // {x:8, y:5}

//Error
var newPoint2 = addPoints({x:1},{x:4,y:3}) //Property 'y' is missing in type '{x: number; }'.




