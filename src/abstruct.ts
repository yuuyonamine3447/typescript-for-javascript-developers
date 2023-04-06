export{};

abstract class Animal {
  abstract cry():string ;
}
//abstractはあんま使わない。

class Lion extends Animal {
  cry() {
    return `roar`;
  }
}
class Tiger extends Animal {
  cry() {
    return `grrrrr`;
  }
}
//abstructとは
//ok!