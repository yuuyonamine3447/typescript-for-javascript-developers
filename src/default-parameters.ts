export {};
//来年の年俸
const nextYearSalary = (currentSalary: number, rate: number =1.1) =>{
  return currentSalary * rate;
}
//引数で入れてリターンで返す。
console.log(nextYearSalary(1000,1.05));