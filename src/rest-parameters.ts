export {};

const reducer = (accumulator: number, currentValue:number) => {
console.log({accumulator ,currentValue});
return accumulator + currentValue;
};

const sum: (...values: number[]) => number =(...values: number[]): number => {
  //console.log(values);
  return values.reduce(reducer);
  //return 100;
  
};
console.log(sum(1,2,3,4,5));
//sum(1,2,3,4,5);

//[1,2,3,4].reduce(reducer);
//要確認