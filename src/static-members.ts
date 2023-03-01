export{};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work(){
    //return"Hey, guys! Are you interested in Typescript";

    return`Hey, guys! This is ${this.firstName} Are you interested in Typescript`;
  }
}

let me = new Me();
//console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
