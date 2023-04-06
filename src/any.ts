import axios from "axios";
export {};
//目的　ネットワーク上から外部のデータを持ってきて使いたいから、axiosを使う。そのために、17行目でとってきたレスポンスデータをデータに入れている。
let url:string = `http://udemy-utils.herokuapp.com/api/v1/articles?token=token123`;
//axios通信するための何か。非同期処理の時に、通信のデータの時に使う。
axios.get(url)
  .then(function (response) {
    // handle success
    // 時間ある時にjavascript
    interface Article {
      id: number;
      title: string;
      description: string;
    }
    // interfaceはあくまで型の提示だけ。一旦かたを後から使うために提示しているイメージ。
    let data: Article[];
    data =response.data;
    //7行目のレスポンス
    let datab: Article[];



    console.log(data);
  //interfaceをなぜ使うのか。axiosはなぜ使うのか。

  });
//OK。jsの復習　必要