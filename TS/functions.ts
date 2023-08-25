// 함수의 파라미터에 타입을 정의하는 방식
// 이런식으로 진행하면, any로 들어감.
// function square(num) {
//   num.toUpperCase();
//   return num * num;
// }

// square(3);
// square("asd");
// square(true);

function square(num: number) {
  return num * num;
}

function greet(name: string) {
  //   person * person;
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

square(3);
// greet(true);
greet("Tony");
doSomething("Tony", 23, true); // 뭔가를 빼먹거나, 형식이 잘못되면 잘못되었다고 표시됨.

function newGreets(person: string = "stranger") {
  //   person * person;
  return `Hi there, ${person}!`;
}

newGreets();
newGreets("Anna");

// 반환값 타입 지정하기
function typeSquare(num: number): number {
  return num * num;
}

function typeGreet(name: string): string {
  return `Hi there, ${person}!`;
}

typeSquare(2);

function newTypeSquare(num: number) {
  num * num;
}
// void: 아무것도 반환하지 않는 함수
// 왜 TS가 void로 받았을까? TS는 자동으로 타입을 추론하기 때문에, return이 없으면 void로 받음.

function voidTypeSquare(num: number): number {
  return num * num;
}

// 이 식에서는 반환해야 하는 값의 종류가 여러개이기 때문에, void로 받지 않음.
// TS가 자동으로 추론
function rando(num: number) {
  if (Math.random() > 0.5) {
    return num.toString();
  }
  return num;
}

// 중요한 것은 반환 타입은 애너테이션을 파라미터 목록 뒤에 쓰면 된다는 것
const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "green", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});
