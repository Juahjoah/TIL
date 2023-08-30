// type alias 형태로 지정
// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 123, y: 456 };

// interface로 동일한 작업이 가능
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 456 };
