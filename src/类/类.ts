/**
 * js可以动态添加属性 ts中不可以 一个对象在创建的时候属性就应该确定下来不能动态添加
 */

// class User {
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

function create(): string;
function create() {
    return '234';
}

class Users {
    //下面是属性列表
    readonly id: number //永远不能改变 如果是数组不可以复制 但是可以push
    age: number
    gender: '男' | '女' = '男' //默认值
    pid?: string

    private _publishNumber: number = 3;//不希望让外面访问这个属性
    private _curNumber: number = 0;

    constructor(public name: string, age: number, private _height: number) { //name 不需要在构造函数里手动赋值 会自动赋值
        this.id = Math.random();
        this.age = age;
    }

    publish(title: string) {
        if(this._curNumber < this._publishNumber){
            console.log('发布'+ title);
            this._curNumber ++;
        }else {
            console.log('发布已经达到上限');
        }
    }

    set height(height: number) {
        if(height < 0) {
            this._height = 0;
        }else {
            this._height = height;
        }
    }

    get height() {
        return this._height;
    }
}
const users = new Users('yang', 19, 1);
users.gender = '女'
// users.publish('文章1')
// users.publish('文章2')
// users.publish('文章3')
// users.publish('文章4')
// users.publish('文章5')
// users.publish('文章6')
users.height = 2;
console.log(users.height);


// 访问器
class Son {
    constructor(private _name: string) {}

    set name(val: string) {
        this._name = val + 'hh';//对_name 进行处理
    }

    get name() {
        return this._name
    }
}
const son = new Son('hhh');
son.name = '123';