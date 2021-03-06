interface RunOptions {
    program:string
    commandline:string[]|string|(()=>string)
}
//commandLine as string
var options:RunOptions = {program:"test1",commandline:"Hello"}
console.log(options.commandline)

//commandline as a string array
options = {program:"test1", commandline:["Hello","World"]}
console.log(options.commandline[0])
console.log(options.commandline[1])

//commandline as a function expression
options = {program:"test1", commandline:()=>{return "**Hello World"}}
var fn:any = options.commandline
console.log(fn())

//Interfaces and Arrays
interface namelist {
    [index:number]:string
}
var listN:namelist = ["John","Sue","Bran","Steve"] // error. if put 1 inplace of "Sue" is not type string

console.log(listN[1])
console.log(listN[2])
interface ages {
    [index:string]:number
}
var listAge:ages 
//listAge["John"] = 15 //ok
//listAge["sue"] = 20 // listAge[2] = "nine" //error

//Interfaces and Inheritance
    //Simple Interface Inheritance
    interface Person {
        age:number
    }
    interface Musician extends Person {
        instrument:string
    }
    var drummer = <Musician>{}
    drummer.age = 20
    drummer.instrument = "drums"
    console.log("Drummer's age" + drummer.age)  
    console.log("play" + drummer.instrument)

    //Multiple Interface Inheritance
    interface iParent1 {
        v1:number
    }
    interface iParent2 {
        v2:number
    }
    interface child extends iParent1, iParent2 {} 
        var iObj:child = {v1:12, v2:23}
    console.log("child's value1: " + iObj.v1 + ", child's value2: " + iObj.v2)
    console.log("value1: " +this.v1 + " value2: " +this.v2) // the "this" here does not work -> value1 = undefined ..
    