var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//****/Creating classes
var Car = /** @class */ (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
    }
    //function
    Car.prototype.disp = function () {
        console.log("Function displays Engine is :  " + this.engine);
    };
    return Car;
}());
//create an object
var obj = new Car("XXSY1");
//access the field
console.log("Reading attribute value Engine as : " + obj.engine);
//access the function
obj.disp();
//****/Class Inheritance
//Single - Every class can at the most extend from one parent class
var Shape = /** @class */ (function () {
    function Shape(a) {
        this.Area = a;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle: " + this.Area);
    };
    return Circle;
}(Shape));
var obj2 = new Circle(200);
obj2.disp();
//Multiple - A class can inherit fr multiple classes. TypeScript doesn't support multiple inheritance
//Multi-level inheritance:
var Root = /** @class */ (function () {
    function Root() {
    }
    return Root;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child)); //indirectly inherits fr Root by virtue of inheritance
var obj3 = new Leaf();
obj3.str = "hello";
console.log(obj3.str);
//Class inheritance and - Method Overriding: is a mechanism by which the child class redefines
// the superclass's method. Super keyworkd is used to refer to the immediate parent of a class
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called..");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doWork = function () {
        _super.prototype.doPrint.call(this); //The super keyword can be used to refer to the super class version of 
        console.log("doPrint() is printing a string.."); // ^ a variable, property or method ^
    };
    return StringPrinter;
}(PrinterClass));
var obj4 = new StringPrinter();
obj4.doWork(); // invokes the super class version of the doWork() function
//The static Keyword: can be applied to the data membres of a class
//A static variable retains its values till the program finishes
//Static members are referenced by the class name
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.disp = function () {
        console.log("The value of num is  " + StaticMem.num);
    };
    return StaticMem;
}());
StaticMem.num = 12; //initiatlize the static variable
StaticMem.disp(); // invoke the static method
//The instanceof operator: returns true if the object belongs to the specified type
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var obj5 = new Person();
var isPerson = obj5 instanceof Person;
console.log(" obj5 is an instance of Person  " + isPerson);
