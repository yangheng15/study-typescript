interface Person {
    readonly name: string
    age: number
    sayHello: () => string,
    see(): number
}

let p:Person = {
    name: 'yang',
    age: 18,
    sayHello() {
        return '123'        
    },
    see() {
        return 123;
    }
}

type Condition = (n: number) => boolean;
// type Condition { //括号就是定界符 不代表对象
//     (n: number): boolean
// }
// interface Condition {
//     (n: number): boolean
// }
// function sum(number: number[], callBack: Condition): number {
//     let s = 0;
//     number.forEach(n => {
//         if(callBack(n)) {
//             s += n;
//         }
//     })
//     return s;
// }
// const res = sum([3,4,5,7,11], n => n % 2 !== 0);
// console.log(res);

/**
 * 接口的继承
 */

// interface A{
//     T1: string
// }
// interface B extends A {
//     T2: number
// }

// interface C extends A,B {
//     T3: boolean
// }

/**
 * 类型兼容
 */
interface Duck {
    sound: "嘎嘎嘎"
    swin(): void
}
let person = {
    name: '伪装',
    sound: "嘎嘎嘎" as  "嘎嘎嘎",
    swin() {
        console.log(this.sound);
    }
}
// let duck: Duck = person;
//下面的报错

//直接赋值报错 可以使用鸭子变形法，通过使用变量赋值
// let duck: Duck = {
//     name: '伪装',
//     sound: "嘎嘎嘎",
//     swin() {
//         console.log(this.sound);
//     }
// };


// let obj = {
//     name: '伪装',
//     sound: "嘎嘎嘎" as "嘎嘎嘎",
//     swin() {
//         console.log(this.sound);
//     }
// }

// let objDuck: Duck = obj;




interface A {
    T1: number
}
interface B {
    T2: string
}
interface C extends A,B {
    T3: boolean
}

let t: C = {
    T1: 123,
    T2: '123',
    T3: true
}



interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    return { } as { color: string; area: number }
}

let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

