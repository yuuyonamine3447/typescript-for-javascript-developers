export {};

type pitcher1 = {
throwingSpeed: number;
};

type Batter1 ={
  battingAvarage: number;
};

const Daimajinsasaki: pitcher1 ={
  throwingSpeed: 154
};

const Ochiai: Batter1 ={
  battingAvarage: 0.367
};

//type TwoWayPlayer = {
 // throwingSpeed: number;
  //BattingAverage: number;
//};

type TwoWayPlayer = pitcher1 & Batter1;

const Otanisanni: TwoWayPlayer = {
throwingSpeed: 165,
battingAvarage: 0.265
};