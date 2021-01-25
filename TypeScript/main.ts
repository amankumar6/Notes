export {};
let message = "Hello World";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Aman";

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let list1: number[] = [1, 2, 3, 4, 5, 6, 7];
let list2: Array<number> = [1, 2, 3, 4];

let person1: [string, number] = ["Chrics", 22];

enum Color {
  Red = 10,
  Green,
  Blue,
}

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = false;
console.log(randomValue);

let myVar1: any = 10;
console.log(myVar1.name);
// myVar1();
// myVar1.toUpperCase();

let myVar2: unknown = 10;

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVar2)) {
  console.log(myVar2.name);
}
// (myVar2 as string).toUpperCase();

let multiType: number | boolean;
multiType = 10;
multiType = false;

let anytype: any;
anytype = 20;
anytype = true;

function add(num1: number, num2?: number): number {
  if (num2) return num1 + num2;
  else return num1;
}

function addAlt(num1: number, num2: number = 10): number {
  return num1 + num2;
}

console.log(add(5, 10));
console.log(addAlt(3));

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruse",
  lastName: "Wayne",
};

fullName(p);
