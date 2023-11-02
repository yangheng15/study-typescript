type Watcher<T> = {
  on: <K extends string & keyof T>(
    eventName: `${K}Changed`,
    callback: (oldValue: T[K], newValue: string) => void
  ) => void;
};

declare function watch<T>(obj: T): Watcher<T>;
// function watch<T>(obj: T): Watcher<T>

const personWarcher = watch({
  firstName: 'Sunny',
  lastName: 'Liao',
  age: 18,
});

personWarcher.on('ageChanged', (newValue, oldValue) => {
  console.log(`firstName changed from ${oldValue} to ${newValue}`);
});

// 为什么要用declare？

// string & keyof T 为什么可以约束对象的属性类型只能是string排除了symbol和number？
type newType = string & (string | symbol | number);
// 变成了联合类型
type newType2 = (string & string) | (string & symbol) | (string & number);

type newType3 = string | never | never;