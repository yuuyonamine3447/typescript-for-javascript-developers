export {};
//arrayは配列　：　例　配列＜数字＞　3.5は違いはない。
let numbers: number[]= [1,2,3];

let numbers2: Array<number> =[1,2,3];

//let string: Array<string> = ["okinawa","Tokyo"]

let stringss2: Array<string> = ["tokyo","osaka"];

let strings: Array<string> = ['typescriot','javascript','coffeescript'];

let nijigenHairetsu: number[][] = [
  //[][]は配列の配列型
[50, 100],
[150,300]
];

let hairetsu: (string | number | boolean)[]= [1,false,'japan'];
//なぜ[]を使うのか