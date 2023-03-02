export {};

let bmi: (height: number, weight: number) => number= (
  height: number,
  weight: number
  ): number => weight / (height * height);

//矢印が二つある時よくわからん
//(height: number, weight: number) => number= (を型として考える
console.log(bmi(1.78,86));