type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

// type aa = ((k: { a: string }) => any |
//           (k: { b: string }) => any |
//           (k: { c: string }) => any ) extends (k: infer I) => void ? I : never;

type Test = { a: string } | { b: string } | { c: string };

type UnionTest = { a: string } | { b: string } | { c: string };
const test: UnionTest = { a: '1', b: '2', c: '3' };

type Intersection = { a: string } & { b: string } & { c: string };
const intersection: Intersection = { a: '1', b: '2', c: '3' };