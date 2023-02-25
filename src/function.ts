export {};

function bmi(height: number,weight: number):number {
  return weight/ (height * height);
//三行目右のナンバーはリターンのナンバー

}

console.log(bmi(1.77,86));