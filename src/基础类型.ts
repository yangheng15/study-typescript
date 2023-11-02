//数组
let nums: object[] = [{name: 'yang'}, {}];
//对象
let u: object;
u = {
    name: 'yang'
}
//null undefined是所有其他类型的自类型，他可以赋值给任何类型
// let n: string = null;

// 其他类型
//联合类型
let name : string | undefined = undefined;
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

const samllPet: Fish | Bird = {
    fly(){},
    layEggs(){},
    swim(){},
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs();
pet.fly(); // 报错
pet.swim(); // 报错

// 交叉类型
interface ClassA{
    name:string;
    age:number
}
interface ClassB{
    name:string;
    phone:number;
}

type Class = ClassA & ClassB
let info:Class = {
    name:'zhagsan',
    age:18,
    phone:1573875555
}

type isNever = number & string; // 永远没有既有number类型又有string类型交集的值，所以是never

 //字面量
//  let a: 'A' = '123';
let gender: "男" | "女"; 
// let arr: [] = [1,3] 报错只能为空数组
let user: {
    name: string
    age: number
}
user = {
    name: 'yang',
    age: 123
}
//元祖
let b : [number, string] = [123, '123']

