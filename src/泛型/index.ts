
//函数泛型
function take<T>(arr: T[], n: number): T[] {
    if (n >= arr.length) {
        return arr;
    }

    const newArr: T[] = [];
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    return newArr;
}
take<number>([1, 2, 3, 4, 5, 6], 3);

//类型别名泛型于接口使用泛型
type callback<T> = (n: T, i: number) => boolean
// interface callback<T> {
//     (n: T, i: number): boolean
// }
function filter<T>(arr: T[], callback: callback<T>) {
    const newArr: T[] = [];
    arr.forEach((it: T, i: number) => {
        if (callback(it, i)) {
            newArr.push(it)
        }
    })
    return newArr;
}
console.log(filter([1, 2, 3, 4], n => n % 2 !== 0));

//类中使用泛型
class ArrayHelp<T> {

    constructor(private arr: T[]) { }

    take(n: number): T[] {
        if (n >= this.arr.length) {
            return this.arr;
        }

        const newArr: T[] = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this.arr[i])
        }
        return newArr;
    }

    shuffle() {
        this.arr.forEach((it: T) => {
            const index = this.getRandom(0, this.arr.length)
            const temp = it;
            it = this.arr[index];
            this.arr[index] = temp;
        })
    }

    /**
     * 【min, max)
     * @param min 
     * @param max 
     */
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

new ArrayHelp<number>([1, 2, 3])

//泛型约束
/**
 * 
 * @param obj 将某个对象name属性的每个单词的首字母大写，然后将该对象返回
 */
interface hasNameProperty {
    name: string
}
function nameToUpperCase<T extends hasNameProperty>(obj: T) {
    return obj.name.split(' ').map(it => it[0].toLocaleUpperCase() + it.substr(1)).join(' ')
}
const o = {
    name: 'yang heng',
    age: 22
}
const newO = nameToUpperCase(o);
console.log(newO);

