

// 传值的情况 在函数调用之前对函数的声明
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: number | string, b: number | string): string | number | undefined {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
}
const result = combine(1, 2);
const result1= combine('1', '2');

//可选参数 和默认参数 可选参数必须在参数末尾
function sum(a: number, b: number = 0, c?: number) {

}

sum(1,2);