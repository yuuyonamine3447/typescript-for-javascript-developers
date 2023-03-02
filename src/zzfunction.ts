export {};

function bmi(height: number,weight: number):number {
  return weight/ (height * height);
//三行目右のナンバーはリターンのナンバー
//function、arrow関数
}
//functionに引数を渡すことで、リターン値に
console.log(bmi(1.77,86));
//ok