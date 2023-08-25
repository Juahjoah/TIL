// 1. 첫 타입 애너테이션
var movieTitle = "Amadeus";
// movieTitle; //  이 변수에 마우스를 올리면 문자의 타입이 나옴.
// 값을 변경해보자
movieTitle = "Arrival";
movieTitle = 9; // 에러가 남. 문자열이 아니기 때문
// 변수의 타입을 지정해주면, 변수에 다른 타입의 값을 넣을 수 없음.
movieTitle.toUpperCase();

// 2. 숫자와 불리언
var numCatLives = 9;
numCatLives += 1;
// numCatLives = "zero"; // 에러가 남. 숫자가 아니기 때문
var gameOver = false;
gameOver = true;
gameOver = "true"; // 에러가 남. 불리언이 아니기 때문
