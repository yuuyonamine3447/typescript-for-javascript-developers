export {};

let profile: {name: string;age: number | null} ={
  name: "Ham",
  age: null
  //ageに具体的な数値が設定できないとき、nullではなくてユニオン型を使う。
};

