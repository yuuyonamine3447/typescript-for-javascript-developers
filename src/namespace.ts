export {};

namespace Japanese{
  export namespace Tokyo{
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English{
  
  export class Person {
    constructor(
      public firstName: string, 
      public middleName: string,
      public lastName: string){}
    }
  }
//namespaceを使う理由として、クラスは一つしか使えないから。

const me = new Japanese.Tokyo.Person('ハムさん')
console.log(me.name);
const michael = new English.Person("Michael","Joseph","Jackson");
console.log(michael);
console.log();

