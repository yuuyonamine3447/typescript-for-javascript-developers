
export{};

function add(a: number, b: number){
  return a + b;
}

console.log(add(1,2));

type ReturnTypefromAdd = ReturnType<typeof add >;
//typeof
//typeof

type MyReturnType<T extends (...args: any) => any> 
= T extends (...args: any) => infer R ? R : any;
//inferは条件の一部としてジェネリクス型T　推論する