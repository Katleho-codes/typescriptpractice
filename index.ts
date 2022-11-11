// Typescript simple types

// Explicit -  writing out the types

let firstname: string = "Katleho";

// Implicit types - let Typescript figure out the type
let othername = "Katleho";

// Note: Having TypeScript "guess" the type of a value is called infer.

// TypeScript Special Types

// 1. Type: any - disables type checking and effectively allows all types to be used.
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

// 2. Type: unknown - a similar, but safer alternative to any.
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.

// Casting is when we use the "as" keyword to say property or variable is of the casted type.

// 3. Type: never - never effectively throws an error whenever it is defined.

// 4. Type: undefined & null - undefined and null are types that refer to the JavaScript primitives undefined and null respectively.

// - These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.

// TypeScript Arrays

// 1. Readonly - prevent arrays from being changed
// 2. Type Inference - TypeScript can infer the type of an array if it has values.

// TypeScript Tuples

// 1. Typed Arrays
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];

console.log(ourTuple);

// Destructuring Tuples

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

// TypeScript Object Types

// const car: { type: string; model: string; year: number } = {
//   type: "Toyota",
//   model: "Corolla",
//   year: 2009,
// };

// no error on optional property, remove it and see what happens
const car: { type: string; mileage?: number } = {
  type: "Toyota",
};

car.mileage = 2000;

console.log(car);

// Index Signatures
// - Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// TypeScript Enums
// - enum is a special "class" that represents a group of constants (unchangeable variables).
// - Enums come in two flavors string and numeric. Lets start with numeric.

// 1. Numeric Enums - Default
// - By default, enums will initialize the first value to 0 and add 1 to each additional value:

// enum CardinalDirections {
//   North,
//   East,
//   South,
//   West,
// }

// let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
// console.log(currentDirection);

// 2. Numeric Enums - Initialized
// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }
// // logs 1
// console.log(CardinalDirections.North);
// // logs 4
// console.log(CardinalDirections.West);

// 3. Numeric Enums - Fully Initialized
// -  You can assign unique number values for each enum value. Then the values will not incremented automatically

// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// // logs 404
// console.log(StatusCodes.NotFound);
// // logs 200
// console.log(StatusCodes.Success);

// String Enums
// - Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
// enum CardinalDirections {
//   North = "North",
//   East = "East",
//   South = "South",
//   West = "West",
// }
// // logs "North"
// console.log(CardinalDirections.North);
// // logs "West"
// console.log(CardinalDirections.West);

// - Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.

// TypeScript Type Aliases and Interfaces
// - TypeScript allows types to be defined separately from the variables that use them.

// Type Aliases
// - Type Aliases allow defining types with a custom name (an Alias).
// type CarYear = number;
// type CarType = string;
// type CarModel = string;
// type Car = {
//   year: CarYear;
//   type: CarType;
//   model: CarModel;
// };

// const carYear: CarYear = 2001;
// const carType: CarType = "Toyota";
// const carModel: CarModel = "Corolla";
// const car: Car = {
//   year: carYear,
//   type: carType,
//   model: carModel,
// };

// Interfaces;
// - Interfaces are similar to type aliases, except they only apply to object types.

// interface Rectangle {
//   height: number;
//   width: number;
// }

// const rectangle: Rectangle = {
//   height: 20,
//   width: 10,
// };

// Extending Interfaces
// - Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

// interface Rectangle {
//   height: number;
//   width: number;
// }

// interface ColoredRectangle extends Rectangle {
//   color: string;
// }

// const coloredRectangle: ColoredRectangle = {
//   height: 20,
//   width: 10,
//   color: "red",
// };

// TypeScript Union Types
// - Union types are used when a value can be more than a single type.

// Union | OR;
// - Using the | we are saying our parameter is a string or number
// - Note: you need to know what your type is when union types are being used to avoid type errors:

// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code}.`);
// }
// printStatusCode(404);
// printStatusCode("404");

// TypeScript Functions

// 1. Return Type
// the `: number` here specifies that this function returns a number

function getTime(): number {
  return new Date().getTime();
}

// 2. Void Return Type
// - The type void can be used to indicate a function doesn't return any value.

function printHello(): void {
  console.log("Hello!");
}
