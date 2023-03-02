export {};

let foocompatible: any;
let barcompatible: string ="TypeScript";

console.log(typeof foocompatible);

foocompatible = barcompatible;

console.log(typeof foocompatible);

let fooIncompatible : string;

let barincompatible : number = 1;

//fooIncompatible = barincompatible;構造的部分型

let foostring: string;
let barstring: string = "string";

foostring = barstring;

let foonumber: number;
let foonumberliteral: 1976 = 1976;

foonumber = foonumberliteral;

interface Animal {
  age: number;
  name: string;
}

class Person{
  constructor(public age: number, public name: string){}
}

let me: Animal;
me = new Person(43, "ハムさん");