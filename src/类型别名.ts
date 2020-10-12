//类型别名
// let u: {
//     name: string
//     gender: '男' | '女'
// }
//类型别名不参与编译
type User = {
    name: string
    gender: Gender
}
type Gender = "男" | "女";

function getUsers(g: Gender): User[] {
    return [{name: 'yang', gender: "男"}]
}
let arr: Gender[] = ['女', '男']