export{};

let name = 'Atsushi';

name = 'Ham';

let nickname ='Ham' as const;

nickname = "Ham";

let profile = {
  name: 'Atsushi',
  height: 178
}as const;

//profile.name ='Ham';
//profile.height = 180;
//as constを書くことでreadonlyの値になる。（読み取り専用）