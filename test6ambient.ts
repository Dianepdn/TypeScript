// Ambient declarations: -are a way of telling the TypeScript compiler that the actual
// source code exists elsewhere - help ensure typesafety and seamlessly integrate other 
// third party js libraries into TypeScript - by convention are kept in a type
// declaration file with following extension (d.ts). EX: Sample.d.ts
// Syntax:
declare module Module_Name {
}

// should be referenced in the client TypeScript file as below:
/// <reference path = "Sample.d.ts" />


