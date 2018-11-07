//****/Creating classes
class Car {
    //field
    engine:string

    //constructor
    constructor(engine:string) {
        this.engine = engine
    }

    //function
    disp():void {
        console.log("Function displays Engine is :  " + this.engine)
    }
}
//create an object
var obj = new Car("XXSY1")

//access the field
console.log("Reading attribute value Engine as : " + obj.engine)

//access the function
obj.disp()

//****/Class Inheritance
//Single - Every class can at the most extend from one parent class
class Shape {
    Area:number
    constructor(a:number) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp():void {
        console.log("Area of the circle: " + this.Area)
    }
}
var obj2 = new Circle(200)
obj2.disp()

//Multiple - A class can inherit fr multiple classes. TypeScript doesn't support multiple inheritance
//Multi-level inheritance:
class Root {
    str:string
}
class Child extends Root {}
class Leaf extends Child {} //indirectly inherits fr Root by virtue of inheritance
var obj3 = new Leaf()
obj3.str = "hello"
console.log(obj3.str)

//Class inheritance and - Method Overriding: is a mechanism by which the child class redefines
// the superclass's method. Super keyworkd is used to refer to the immediate parent of a class
class PrinterClass {
    doPrint():void {
        console.log("doPrint() from Parent called..")
    }
}
class StringPrinter extends PrinterClass {
    doWork():void {
        super.doPrint()   //The super keyword can be used to refer to the super class version of 
        console.log("doPrint() is printing a string..") // ^ a variable, property or method ^
    }
}
var obj4 = new StringPrinter()
obj4.doWork() // invokes the super class version of the doWork() function

//The static Keyword: can be applied to the data membres of a class
//A static variable retains its values till the program finishes
//Static members are referenced by the class name
class StaticMem {
    static num:number
    static disp():void {
        console.log("The value of num is  " + StaticMem.num)
    }
}
StaticMem.num = 12 //initiatlize the static variable
StaticMem.disp() // invoke the static method

//The instanceof operator: returns true if the object belongs to the specified type
class Person{ }
var obj5 = new Person()
var isPerson = obj5 instanceof Person
console.log(" obj5 is an instance of Person?: " + isPerson)


