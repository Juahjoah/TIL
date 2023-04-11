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

// 변수선언 let : 변수 값을 변경할 수 있음. 생성할 때만 let붙이고, 변경 시에는 생략 가능. = 업데이트가 가능하다.
// 일단 선언할 때는 let으로 진행하는 거 필수
let ab = "hihello";
// 변경할 때는 let 생략 가능
ab = "onlyhi";
// I say onlyhi
console.log('I say ' + ab)
// ⭐ 기본적으로 사용하는 것은 const, 필요한 경우에만 let을 사용하기, var는 사용하지 말자!⭐ → check.md 1.


1.2. Booleans
// true(1), false(0) 
const areYouOkay = true; 
console.log(areYouOkay);
const anybodyHere = null;
// null : 비어있는 것이 아니라, 아무것도 없는 상태로 채워져있는 값. 의도적으로 비어있는 것을 표현함.
console.log(anybodyHere);
// undefined
let something; // 변수를 만들었지만, 값을 주고 있지는 않음.
console.log(something);


1.3. Arrays
// const dayOfweek = mon + tue + wed + thu + fri;
// ① 대괄호 [ ] 로 선언하기 ② array 안 각각의 항목은 쉼표로 분리
const dayOfweek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, true, null, undefined, "hey"];

console.log(dayOfweek);
console.log(nonsense);
// Get Item from Arry
console.log(dayOfweek[4]);
// Add one more day to the array
dayOfweek.push("sun");
console.log(dayOfweek);


1.4. Objects
const player = {
    name: "hiname",
    points: 1010,
    handsome: false,
}
console.log(player);
console.log(player.name);
console.log(player["name"]);
// object는 내부 속성 수정이 가능함.
player.lastName = "potato";
player.points = player.points + 428;
console.log(player);

1.5. function
// function : 코드의 입력을 간소화하고 싶을 때 사용. 어떤 코드를 캡슐화해서 반복할 수 있게 만들어줌.
// argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법 sayHello("JJJJJ", 27); 는 2개의 argument를 가지고 있음.
console.log("Hello, my name is JJJJJ");
console.log("Hello, my name is AAAAA");
function sayHello(nameOfPerson, age){
    // 여기 작성하는 말이 sayHello를 실행할 때마다 반복
    // console.log("Hello! my name is C"); -> C 부분을 내가 원하는 값으로 지정하고 싶다면?
    console.log("nameOfPerson");
    console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
}

sayHello();
console.log(); // 아무것도 값을 주지 않아서 따로 출력되지 않음.
sayHello("JJJJJ", 27);
sayHello("WWW", 10);
sayHello("KKK", 23);