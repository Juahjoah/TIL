// 1. 첫 타입 애너테이션
let movieTitle: string = "Amadeus";
// movieTitle; //  이 변수에 마우스를 올리면 문자의 타입이 나옴.
// 값을 변경해보자
movieTitle = "Arrival";
movieTitle = 9; // 에러가 남. 문자열이 아니기 때문
// 변수의 타입을 지정해주면, 변수에 다른 타입의 값을 넣을 수 없음.

// movieTitle.upper(); // 문자열에는 사용할 수 없는 함수라 에러가 남. 오타를 내는 경우에도 동일.
movieTitle.toUpperCase();

// 2. 숫자와 불리언
let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero"; // 에러가 남. 숫자가 아니기 때문

let gameOver: boolean = false;
gameOver = true;
gameOver = "true"; // 에러가 남. 불리언이 아니기 때문

// 3. TypeScript의 컴파일링
// 컴파일링을 통해 타입스크립트를 자바스크립트로 변환할 수 있음.

// 4. 타입스크립트의 타입 추론
let tvShow = "Orange is the New Black";
tvShow = "The Other Two";
tvShow = false; // 에러가 남. 문자열이 아니기 때문

let isFunny = true;
isFunny = false;
isFunny = "false"; // 에러가 남. 불리언이 아니기 때문

// 5. Any 타입
let thing: any = "hello"; // any 타입은 어떤 타입의 값이든 담을 수 있음. any 타입은 타입스크립트의 타입 추론을 무력화시킴.
thing = 1;
thing = true;
thing();
thing.toUpperCase(); // 존재하지 않는 메서드도 접근 가능

// 주석 처리하고 다시 확인해보자!
// let thing = "hello"; // 아마 string 타입으로 추론
// thing(); // 에러가 남. 함수가 아니기 때문

// 6. 초기화와 별도로 변수를 선언하는 방식
const movies = ["Amadeus", "Alien", "Star Wars", "The Thing"];
// let foundMovie; // 현재 이 경우에는 any로 판단하고 있음.
// 마음대로 결정하면 any로 선언하니까 아예 제대로 선언해주기
let foundMovie: string; // 이렇게 하면 any가 아니라 string으로 추론함.

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}

// foundMovie();
// foundMovie = 1; // string으로 변경되면 이런 선언 전부 불가!
