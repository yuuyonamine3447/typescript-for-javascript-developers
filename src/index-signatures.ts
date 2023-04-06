export {};

interface Profile{
  name: string;
  underTwenty: boolean;
  [index: string]: string|number|boolean;
}
//index型　[index: string]名前決まってないけどとりあえずオプションとして入れたい時。例　今は決まってないけど、もう一個追加したいとき。
//名前決まっていないけど型だけ置いておこうといった感じ。仮に11行目のfalseの後にweight: 43};を追加してもエラーにならない。

let profile: Profile = {name:"Ham",underTwenty: false, weight: 43};

//how to write index signatures
//{[ index: typeforIndex]: typeforvalue}
profile.name = "ham";
profile.age =43;
profile.nationality = "Japan";
//index型は型固定されていないので、あまり使わない。
