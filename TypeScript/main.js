"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "Aman";
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
var n = null;
var u = undefined;
var list1 = [1, 2, 3, 4, 5, 6, 7];
var list2 = [1, 2, 3, 4];
var person1 = ["Chrics", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = false;
console.log(randomValue);
var myVar1 = 10;
console.log(myVar1.name);
// myVar1();
// myVar1.toUpperCase();
var myVar2 = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVar2)) {
    console.log(myVar2.name);
}
// (myVar2 as string).toUpperCase();
var multiType;
multiType = 10;
multiType = false;
var anytype;
anytype = 20;
anytype = true;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
function addAlt(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log(add(5, 10));
console.log(addAlt(3));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: "Bruse",
    lastName: "Wayne"
};
fullName(p);
