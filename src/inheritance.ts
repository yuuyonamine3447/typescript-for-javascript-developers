export {};

class Animal{
  constructor(public name: string){}
  run(): string {
    return `I can run`;
  }
}
//メゾット？　run(): クラスの中に定義されている処理。今回はanimalクラスの中で、リターン値を返すために、ランメゾットを使っている。
class Lion extends Animal{
  public speed: number;
 constructor(name: string, speed: number){
  super(name);
//extendしたものを呼び足すためにsuperを使ってる。
  this.speed = speed;
 }

  run(): string {
   const parentMesseage = super.run();
   //継承されたクラスを使いたい時に、superを使う。
   console.log({parentMesseage});
    return`I can run 80km`;
  }
}

//let animal = new Animal();
//console.log(animal.run());

//let lion = new LIon();
//console.log(lion.run());
console.log(new Animal(`Mickey`).run());
console.log(new Lion(`Simba`,80).run());
//animalclassのrumメゾットを出力したいから.run()をつけている。
//おぇ