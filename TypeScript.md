# 1. What are the key differences between TypeScript and JavaScript?

TypeScript is a statically typed superset of JavaScript. It adds types, interfaces, and compile-time type checking, which JavaScript lacks. TypeScript transpiles to plain JavaScript, making it compatible with any JavaScript environment.

# 2. Why do we need TypeScript?

TypeScript helps catch errors at compile time, offers better tooling (autocomplete, refactoring), and ensures more maintainable and scalable code by enforcing strict typing rules.

# 3. What types exist in TypeScript?

TypeScript supports primitive types like string, number, boolean, undefined, null, symbol, and bigint. It also supports complex types like arrays, tuples, enums, any, unknown, void, never, objects, and union and intersection types.

# 4. What is the difference between type and interface?

type and interface both allow you to define custom types, but interface is better suited for defining shapes of objects, while type can handle more complex types such as unions and tuples.
type CustomType = string | number;
interface User {
id: number;
name: string;
}

# 5. What is your opinion on JSDoc as an alternative to TypeScript?

JSDoc is a documentation tool that can annotate types in JavaScript, but it doesn’t offer the same compile-time safety as TypeScript. JSDoc lacks many features TypeScript has, such as static analysis, which ensures code correctness before execution.

# 6. What are union types in TypeScript? Give an example.

A union type allows a value to be one of several types. It uses the | operator to combine types.
function printId(id: number | string) {
console.log(id);
}

# 7. How does TypeScript handle type assertions? Why should you use as?

Type assertions (using as or the angle bracket syntax) tell the TypeScript compiler that you know the type better than it does. It's used when you're sure about the type but TypeScript cannot infer it correctly.
const value: any = "Hello";
const strLength: number = (value as string).length;

# 8. What is the difference between the unknown and any types?

unknown is safer than any. While any disables all type-checking, unknown forces you to perform type checks before manipulating the value.
let data: unknown;
data = "Hello";
if (typeof data === "string") {
console.log(data.toUpperCase());
}

# 9. What is the never type, and when would you use it?

The never type represents values that never occur. It's often used for functions that throw errors or infinite loops.
function throwError(): never {
throw new Error("This is an error");
}

# 10. What is type narrowing, and how does TypeScript implement it?

Type narrowing occurs when TypeScript reduces the type of a variable to a more specific type using type guards, such as typeof or instanceof.
function padLeft(value: string | number) {
if (typeof value === "string") {
return value.padStart(10);
}
return value.toString();
}
Advanced Type Features

# 11. What are generics in TypeScript, and how do they contribute to reusability?

Generics allow you to create reusable components or functions that work with any type, providing flexibility and type safety.
function identity<T>(arg: T): T {
return arg;
}

# 12. How do generics constraints work? Why are they useful?

You can constrain generics to ensure they meet certain conditions, such as having certain properties.
function logLength<T extends { length: number }>(arg: T): void {
console.log(arg.length);
}

# 13. Describe conditional types and when they can be utilized.

Conditional types allow you to create types that depend on a condition, enabling advanced type manipulation.
type IsString<T> = T extends string ? true : false;

# 14. What is the difference between the utility types Partial<T> and Pick<T, K>?

Partial<T> makes all properties in T optional. Pick<T, K> extracts specific properties from T.
interface Person {
name: string;
age: number;
}
type PartialPerson = Partial<Person>;
type NameOnly = Pick<Person, 'name'>;

# 15. In TypeScript, what does keyof do?

keyof creates a union of the keys of an object type.
interface Person {
name: string;
age: number;
}
type PersonKeys = keyof Person; // 'name' | 'age'

https://dev.to/m_midas/30-frontend-interview-questions-typescript-12c2
https://www.geeksforgeeks.org/typescript/typescript-interview-questions/
https://docs.google.com/document/d/1gslw6aljemv-NWMkdBkjxdIPYbB3kiijbNHfDd9fiQA/edit?usp=sharing
..............

TypeScript Quick Interview Sheet (20 Qs)

1️⃣ What is TypeScript?

A typed superset of JavaScript that adds static types and compiles to JS.

2️⃣ Difference between JS & TS?

JS → dynamic typing; TS → static typing with compile-time checks.

3️⃣ What are types in TS?

string, number, boolean, any, unknown, void, never, enum, tuple.

4️⃣ any vs unknown?

any disables type checking; unknown is safer, must check type before using.

5️⃣ What is type inference?

TS automatically detects the type if not explicitly declared.

6️⃣ interface vs type?

Interface → objects, extendable; Type → objects, unions, primitives, tuples.

7️⃣ What is a class?

Blueprint to create objects with properties and methods.

8️⃣ Access modifiers?

public → everywhere; private → inside class; protected → class + subclasses.

9️⃣ What are generics?

Functions or classes that work with any type safely.

10️⃣ What are enums?

Named constants in TypeScript.

11️⃣ What are tuples?

Fixed-length arrays with specific types.

12️⃣ Union & Intersection types?

Union (|) → one of multiple types; Intersection (&) → combine multiple types.

13️⃣ readonly vs const?

const → variable cannot be reassigned; readonly → object property cannot be reassigned.

14️⃣ What is never?

Type for values that never occur (e.g., functions that always throw errors).

15️⃣ What is type assertion?

Tell TS to treat a variable as a certain type.

16️⃣ What is unknown type?

Safer than any; requires type check before use.

17️⃣ What are decorators?

Functions that add metadata to classes, methods, or properties (used in NestJS).

18️⃣ Interface vs Abstract class?

Interface → only structure; Abstract class → structure + implementation + access modifiers.

19️⃣ Optional & default parameters?

Optional ? → may be omitted; Default → assigned if not provided.

20️⃣ Why use TypeScript?

Improves code quality, readability, maintainability, and catches errors at compile-time.
