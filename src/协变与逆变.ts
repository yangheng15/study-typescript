interface Fan {
  call: () => void;
}

interface IKun extends Fan {
  sing: () => void;
  dance: () => void;
}

interface SuperKun extends IKun {
  rap: () => void;
}

// 什么是协变？子类型赋值给父类型 【需要确定 谁在给：小，谁在收：大】
const ikun: IKun = {
  call: () => {},
  sing: () => {},
  dance: () => {},
};
const fan: Fan = ikun;

// 什么是逆变？父类型赋值给子类型
type Transform = (x: IKun) => SuperKun;

let transform: Transform = (x) => {
  return x as any;
};

type SubTransform = (x: SuperKun) => IKun;

let subTransform: SubTransform = (x) => {
  return x as any;
};

subTransform = transform;
const superKun = {
  call: () => {},
  sing: () => {},
  dance: () => {},
  rap: () => {},
};
subTransform(superKun);
transform(superKun);

/***
 * 不要比较两个函数的类型大小，因为函数里有参数又返回值，不好比较。要比较具体是某一个参数，在给和收的时候，哪一个类型传递给了那一个类型。
 * 不用管什么协变还是逆变，只要保证类型安全，保证成员始终可用
 */