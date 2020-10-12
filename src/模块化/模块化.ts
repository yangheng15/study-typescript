import { fun, num } from './myModule'
import obj from './myModule';
import * as fs from 'fs';
fun();
console.log(obj.name);
console.log(fs.readFileSync('./index.ts'));

