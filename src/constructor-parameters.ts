export{};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name= name;
    this.age= age;
    //受け取ったnameとageで初期化をする。
  }
}
//インスタンスを作っていく
let taro = new Person("Taro",30);

console.log(taro);

type PersonType = typeof Person;
//typeof の後ろにあるものの型を出力する。

type Profile = ConstructorParameters<PersonType>
//constructorの引数の方が表示された。
//classはあんまり使わない。
const profile: Profile = ["ham",43];
//Profileでアノテイトする。
const ham = new Person(...profile);
//インスタンスを作成。
console.log(ham);

//型の定義
type MyConstructorParameters<
T extends abstract new (...args: any) => any
> = T extends abstract new (...args: infer P) => any ? P : never;

//ok