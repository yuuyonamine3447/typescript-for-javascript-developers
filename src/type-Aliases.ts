export{};

type Mojiretsu = string;

const foostring: string ="herro";
const fooMojiretsu: Mojiretsu = "herro";

const example1 = {
  name: "ham",
  age: 23
}

type Profile = {
  name: string;
  age: number;
}


const example2: Profile = {
  name: "ham",
  age: 23
};

type Profile2 = typeof example1;