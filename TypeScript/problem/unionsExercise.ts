// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
// 숫자나 불리언 타입을 갖는 변수 highScore를 만들기

let highScore: number | boolean;
highScore = 1;
highScore = false;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
// 숫자나 문자열 타입을 갖는 stuff 배열을 만들기. 숫자 또는 문자열의 배열은 가능하지만, 숫자와 문자열이 섞인 배열은 불가

const stuff: number[] | string[] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
// SkillLevel이라는 리터럴 타입을 만들기

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
// SkiSchoolStudent라는 타입을 만들기(3번 활용)

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// RGB 색상을 나타내는 타입 정의
// r should be a number
// g should be a number
// b should be a number

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

// Create an array called colors that can hold a mixture of RGB and HSL color types

const colors: (RGB | HSL)[] = []; // 모든 요소가 두 타입 중에 하나라면 상관 없음.

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
// 문자열 또는 문자열의 배열을 받는 greet 함수를 작성하기

const greet = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello, ${p}`);
    }
  }
};
