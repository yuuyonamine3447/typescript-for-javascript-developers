export{};

type Profile = {
  name: string;
  age: number;
}

const me: Profile = {
name: "ham",
age:43,
};
me.age++;
//インクリメント
//アノテーションをプロファイルとして

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 40,
};

//friend.age++;

type YomitorisSenyo<T>={
  readonly[P in keyof T]: T[P] ;
};
type YomitoriSenyoProfile = YomitorisSenyo<Profile>;
//in keyofを使ってTというかたで構成されるユニオンタイプ
//を割り出して、そのユニオンタイプから一個ずつTから取り出して、
//Pに代入する。