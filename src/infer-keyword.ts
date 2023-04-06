
export{};

function add(a: number, b: number){
  return a + b;
}

console.log(add(1,2));

type ReturnTypefromAdd = ReturnType<typeof add >;
//ReturnTypeは型ではなくて、utilitytypeの一つ。便利な型と呼ばれている。
//returntypeは関数の戻り値を型にする。この場合addの返り値のnumber型が型となる。
//typeof
//typeof

type MyReturnType<T extends (...args: any) => any> 
= T extends (...args: any) => infer R ? R : any;

//inferは条件の一部としてジェネリクス型T　推論する
//定義のとこは流しでOK❕