export {};

class Person {
   constructor(public name: string,protected age: number){
   }
}

const me = new Person('hamusan',43);
console.log(me);