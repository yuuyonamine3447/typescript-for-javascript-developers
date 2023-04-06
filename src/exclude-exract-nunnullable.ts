export{};

type DebugType = () =>void;
type SomeTypes = string | number |DebugType;
type FunctionType = Exclude<SomeTypes,string|number>;
//debugtypeが設定される。
//Exclude<全体のユニオン型,不要なものだけで構成されるユニオン型＞
//
type NunFuctionType = Exclude<SomeTypes,DebugType>;

type TypeExcludingFunction= Exclude<SomeTypes,Function>;
//Functionは関数の型の総称→ひっくるめて関数の型を除外したい
type FunctioTypeByExtract= Extract<SomeTypes,DebugType>;
//debugtyoe(関数の型）だけ取り出したい 抽出する。
type NullableTypes = string | null | undefined;
type NonnullableTypes = NonNullable<NullableTypes>;

//ok!　Excludeはよく使う！