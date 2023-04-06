export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
} catch (result){
  console.log({error});
}
let foo : void= undefined;
let bar: never = error(`only me!`);
//一旦保留。neverは何も入れることができないというニュアンス。