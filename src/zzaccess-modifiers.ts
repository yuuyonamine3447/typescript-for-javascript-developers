export {};

class Person {
  public name: string;
  //private age: number;
  protected age: number;
  protected nationality: string;
  constructor(name: string,age: number,nationality: string) {
   this.name =name;
   this.age = age;
   this.nationality = nationality;
  //react あんま使わない
  //classは設計書で、インスタンスは設計書をもとに作られたもの
　　}
  profile(): string {
    return `name: ${this.name},age: ${this.age}`;

  }
}
class Android extends Person{
constructor(name: string, age: number, nationality: string){
super(name,age,nationality)
}
//
profile(): string{
  return `name: ${this.name},age: ${this.age},nationality: ${this.nationality}`;

}
}
//classに引数を入れてインスタンスが作られる。
let taro = new Person('taro',30,'japan');
//newの使い方 reactでは使わない。
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
//OK