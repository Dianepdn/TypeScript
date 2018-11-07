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

