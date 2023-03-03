export {};

interface Profile{
  name: string;
  underTwenty: boolean;
  [index: string]: string|number|boolean;
}

let profile: Profile = {name:"Ham",underTwenty: false};

//how to write index signatures
//{[ index: typeforIndex]: typeforvalue}
profile.name = "ham";
profile.age =43;
profile.nationality = "Japan";
