export {};

class Mahoutsukai {

}

class Souryo {

}

class Taro extends Mahoutsukai {

}
interface Kenjha{
  ionazun(): void;

}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenjha,Senshi{
  ionazun(): void{
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();