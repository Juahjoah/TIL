// const activeUsers: [] = [];
// activeUsers.push('John') // 빈 배열에 문자열을 넣으려고 하면 에러 발생

// 빈 배열이 아니라 타입을 지정해서 알려주기 -> 붙이지 않으면, 어떤 타입이던지 다 들어갈 수 있음
const activeUsers: string[] = [];

activeUsers.push("John");
// activeUsers.push(123); // 에러 발생. 문자열만 넣을 수 있음.

const ageList: number[] = [1, 2, 3];
ageList[0] = 999;
// ageList[0] = "abcd" // 에러 발생. 숫자만 넣을 수 있음.

// 원시형 타입뿐만 아니라, 커스텀(custom) 타입도 배열로 만들 수 있음.
// const bools: Array<boolean> = []; // 이렇게도 사용 가능
const bools: boolean[] = []; // 이렇게도 사용 가능

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 2 });
// coords.push({ y: 2 });  // 에러 발생. x 속성이 없음.
// coords.push({ x: 23, y: "2" }); // 에러 발생. y 속성이 문자열임.

// 다차원 배열
const board: string[][] = [
  // 2차원 배열을 선언하는 방법
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]]; // 3차원 배열
