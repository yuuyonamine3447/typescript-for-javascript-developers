export {};

//const echo = (arg: number  ): number => {
 //return arg;
//};

//const echo = (arg: string): string =>{
  //return arg;
//};

//<T>はナンバー型にもなるし、ストリング型にもなる。型引数、抽象的な型。
const echo = <T>(arg: T): T =>{
  return arg;
};
console.log(echo<number>(100));
console.log(echo<string>("hello"));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T){}
//jsのechoメゾット
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>("herro!").echo());
console.log(new Mirror<boolean>(true).echo());