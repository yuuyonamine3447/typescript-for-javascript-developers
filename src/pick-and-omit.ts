export{};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
//nameとheightだけ取り出したい。必要なものだけ取り出して、新たに型を作りたい。

type SimpleProfile = Pick<DetailedProfile, 'name'|'weight'>;

//omit除外する
type SmallProfile = Omit<DetailedProfile,'height'>;

type MyOmit=Pick<DetailedProfile, 'name'|'weight'>;
type MySmallProfile = MyOmit;
//omit 除外する、pick　必要なものだけ取り出す
//ok