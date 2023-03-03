export{};

type MyExclude = 
//|(string extends string | number ? never : string)
//|(number extends string | number ? never : number)
//|(DebugType extends string | number ? never : DebugType);
DebugType;
//定義参照
//true :よりも左型、false：よりも右側　詳しくはjsの演算子
type DebugType = () =>void;
type SomeTypes = string | number |DebugType;
type FunctionType = Exclude<SomeTypes,string|number>;
//debugtypeが設定される。
//Exclude<全体のユニオン型,不要なものだけで構成されるユニオン型＞
//
type MyFunctionType = MyExclude;
type NunFuctionType = Exclude<SomeTypes,DebugType>;

type TypeExcludingFunction= Exclude<SomeTypes,Function>;
//Functionは関数の型の総称→ひっくるめて関数の型を除外したい
type FunctioTypeByExtract= Extract<SomeTypes,DebugType>;
//debugtyoe(関数の型）だけ取り出したい 抽出する。
type NullableTypes = string | null | undefined;
type NonnullableTypes = NonNullable<NullableTypes>;