export {};
//大量にプロパティがある型を想像しながら
type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

//type Profile2 = {
  //name?: string;
  //age?: number;
//}
//？オプショナルなプロパティ。これは変更によって追従するのは難しい

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;
//<Partial>型を指定
//自動的に？がつく型ができる。写真参照。typeに何か追加したら自動的にオプショナルな型がつく。
//ユーティレティー型　１〜８はパーシャル型
//全部が必須のプロパティにするには？
//type RequiredType = Required<Profile>
//ユーティリティ型



