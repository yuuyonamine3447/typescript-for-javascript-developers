export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;
  constructor(name: string,age: number,nationality: string) {
   this.name =name;
   this.age = age;
  }

  profile(): string {
    return `name: ${this.name},age: ${this.age}`;

  }
}
class Android extends Person{
constructor(name: string, age: number, nationality: string){
super(name,age,nationality)
}

}
let taro = new Person("taro",30,"japan");
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);