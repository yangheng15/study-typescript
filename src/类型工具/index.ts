// 联合类型
// function test(x: string | any[]) {
//     return x.length;
// }

// test('');
// test([]);
// test(1); // error

// 交叉类型
// interface Dog {
//     name: string;
//     age: number;
// }

// interface Animal {
//     name: string;
//     color: string;
// }

// const x: Dog & Animal = {
//     name: 'x',
//     age: 1,
//     color: 'red',
// };

// 类型保护
// 1. is
// function isString(value: any): value is string {
//     return Object.prototype.toString.call(value) === '[object String]';
// }

// function fn(x: string | number) {
//     if (isString(x)) {
//         return x.length; // error 类型“string | number”上不存在属性“length”。
//     } else {
//         // .....
//     }
// }

// 2. typeof
// function isString(value: any) {
//     return Object.prototype.toString.call(value) === '[object String]';
// }

// function fn(x: string | number) {
//     if (typeof x === 'string') {
//         return x.length; // error 类型“string | number”上不存在属性“length”。
//     } else {
//         // .....
//     }
// }

// typeof 关键词
// interface Fn {
//     (x: string): number
// }
// type Fn1 = (x: string) => number
// function fn(x: string) {
//     return x.length;
// }
// const fn: Fn1 = function(x) {
//     return x.length
// }

const obj = {
    x: 1,
    y: '2',
};

// type T0 = typeof fn;
// type T1 = typeof obj;

// keyof 关键词
// interface Animal {
//     name: string;
//     age: number;
// }

// type PersonAttrs = keyof Animal; // 'name' | 'age'

// in 关键词
// type Brid = {
//     [key in PersonAttrs]: number;
// };

// []操作符
// interface Per {
// 	name: {
//         a: number
//     };
// 	age: number;
// }

// type x = Per['name'] // x is string

// 类型约束
// type Lengthwise = {
//     length: number;
// };

// function createList<T extends number | Lengthwise>(): T[] {
//     return [] as T[];
// }

// const numberList = createList<number>();
// const stringList = createList<string>();
// const arrayList = createList<any[]>();
// const boolList = createList<boolean>(); // error

// 映射类型
// interface Dog {
//     name: string;
//     age: number;
// }
// const dog: Partial<Dog> = {};

// type Eg = Exclude<'key1' | 'key2', 'key2'>

type Position = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT'

const position: Position = 'UP'