<h1>1. 변수</h1>

console.log(54545454);
console.log("hahahah");

// 변수선언 const : constant(상수), 값이 바뀔 수 없음.
const a = 5; 
const b = 2; // '2'는 문자열로 인식
console.log(5+2);
console.log(a+b);
console.log(5*2);
console.log(a*b);
console.log(5/2);

const myName = "jjjjj";
console.log("hello " + myName);

// 변수선언 let : 변수 값을 변경할 수 있음. 생성할 때만 let붙이고, 변경 시에는 생략 가능.
// 일단 선언할 때는 let으로 진행하는 거 필수
let ab = "hihello";
// 변경할 때는 let 생략 가능
ab = "onlyhi";
// I say onlyhi
console.log('I say ' + ab)