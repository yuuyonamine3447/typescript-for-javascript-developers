export {};

type Profile = {
  name: string,
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;
//keyof jsのオブジェクト。
type Optional<T> = {
  [P in keyof T]?: T[P] |null;
};
//keyofはオブジェクトのキーを取り出す。nameがこの場合、キーで、stringやnumberがバリュー。

type OptionalProfile = Optional<Profile>;

//9行目profileはtype Profile = {name: string;age: number;}
//あるオブジェクトから型を一個ずつ取り出している。