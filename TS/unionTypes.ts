// 유니온 타입 Union Types
// let age: number | string = 21;
let age: number | string | boolean = 21;
age = 23;
age = "24";
age = true;

// 두 좌표 사이의 거리나 두 지점 또는 위치 사이의 간격을 나타내는 함수 작성
type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// let coordinates: Point | Loc; // 초기값 없는 상태
let coordinates: Point | Loc = { x: 10, y: 20 }; // 초기값 있는 상태
coordinates = { lat: 35, long: 135 };

// 유니온 타입에 함수 적용하기
function printAge(age: number | string): void {
  // 반환값이 없는 함수라 void 가능
  console.log(`You are ${age} years old.`);
}

printAge(21);
printAge("23");

function calculateTax(price: number | string, tax: number) {
  // 반환값이 있는 함수라 number 가능
  // price.replace("$", ""); // 문자는 가능하지만, 숫자는 불가
  // return price * tax; // 숫자는 가능하지만, 문자에 값을 곱할 수는 없음.

  // 숫자일 때는 x, 문자일 때는 y를 실행하는 함수로 만들기
  if (typeof price === "string") {
    // price = price.replace("$", "");
    price = parseFloat(price) * tax; // 문자를 숫자로 변환하는 함수
  } else {
    price * tax;
  }
}

// 유니온 타입에 배열 적용하기
// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, true, "hihi", {}];

// any 말고 유니온 타입으로 배열을 만들 수 있음.
// const stuff: (number | string)[] = [1, 2, 3, "hihi"];
// const stuff: number[] | string[] = ["hihi", "hello", 1]; // 의도와 다르게 작성. 숫자 배열만을 갖거나, 문자 배열만을 가질 수 있는 상태. 둘 중 하나만!

const coords: (Point | Loc)[] = [];
coords.push({ lat: 35, long: 135 });
coords.push({ x: 1, y: 2 }); // 문자를 넣어도 오류, x,y 중 하나만 누락해도 오류

// 리터럴 타입 Literal Types
let zero: 0 = 0; // 숫자 타입이 아니라 아예 숫자 0만을 갖도록 선언
zero = 2; // 오류

let hi: "hi" = "hi";

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
mood = "Neutral"; // 오류

type DayOfWeek = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

let today: DayOfWeek = "Mon";
let today: DayOfWeek = "Monday"; // 오류
