export {};

type ObjectType ={ 
  name: string; 
  age: number;
};

interface ObjectInterface {
  name: string; 
  age: number;
}
//typeとinterfaceは両方とも型を宣言できるもの。書きやすい方を選ぶ。イコールの有無ぐらい。
let object: ObjectInterface = {
  name: "ham-san",
  age: 43
};