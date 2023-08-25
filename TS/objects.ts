// const dog = {
//   name: "Elton",
//   breed: "Australian Shepherd",
//   age: 0.5,
// };

// const printName(first: string, last: string)
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });

// 좌표를 이용해 반환 타입, 변수에 annotation처리 하기

// 객체 리터럴(Object Literal)
let conrdinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// 초과 프로퍼티
printName({ first: "Mick", last: "Jagger", age: 479 }); // 불가능
// 지정된 프로퍼티 외의 값을 오류라고 판단하고 나머지는 무시
const person = { first: "Mick", last: "Jagger", age: 479, isAlive: true };
printName(person);

// Type alias
type Point = { x: number; y: number }; // 타입에 이름을 붙여서 재사용
let aliasConrdinate: Point = { x: 34, y: 2 };

function aliasRandomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

type MyNum = number;
let age: MyNum = 34238;

// nested object

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  // 객체 내부에 객체를 넣을 수 있음
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  // 소문자는 파라미터 이름, 대문자는 타입 이름(반드시 대문자로 작성)
  return song.numStreams * 0.00033;
}

function printSong(song: Song): void {
  console.log(`${song.title} by ${song.artist}`);
}

const mySong = {
  title: "Unchined Melody",
  artist: "The Righteous Brothers",
  numStreams: 196000,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(mySong);
printSong(mySong);

// 선택적 프로퍼티
type PointTwo = {
  x: number;
  y: number;
  z?: number; // z는 있어도 되고 없어도 되는 프로퍼티
};

const myPoint: PointTwo = { x: 1, y: 3 };
