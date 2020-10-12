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

