export {};

type Prefectures = 'Tokyo'|"Chiba"|"Tottori"|"shiga";
//ある共通のデータ型を持たせたいときにrecord型を使う

type Covid19InfectionInfo={
  kanji_name: string;
  confirmed_cases: number;
}

const covid19Japam: Record<Prefectures,Covid19InfectionInfo>= {
  Tokyo: {kanji_name:"東京",confirmed_cases: 1960},
  Chiba: {kanji_name:"千葉",confirmed_cases: 249},
  Tottori: {kanji_name:"鳥取",confirmed_cases: 2},
  shiga: {kanji_name: "滋賀",confirmed_cases: 13}
};