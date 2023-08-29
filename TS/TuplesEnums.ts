// const stuff: (string | number)[] = ["abc", "absd", "asdfd"];

// const color: number[] = [23, 45, 65, 2342];
const color: [number, number, number] = [255, 0, 255];

// 혼합 타입을 만드는 경우에는 순서가 중요
// [200, "Ok"]
// [400, "Not Found"]

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]; // 다른 문자열을 추가하거나, 순서가 틀리면 에러가 남
// goodRes[0] = "200" // 에러가 남
// goodRes.push(123)
// goodRes.pop()
// goodRes.pop()
// goodRes.pop() // pop을 3번 실행하면 빈 배열이 됨.

const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];

// Enum
const PENDING = 0;
const SHIPPED = 1;
const DELIVERED = 2; // 2의 의미는 중요한게 X. DELIVERED의 뜻이 중요한 것.
const RETURNED = 3;

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}
// enum OrderStatus {
//   PENDING = 10,
//   SHIPPED = 34,
//   DELIVERED = 123,
//   RETURNED = 312,
// }

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  // 입력하는 status는 OrderStatus 타입이어야 함.
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

// enum을 문자열로 전달 가능
enum ArrowKeys {
  Up = "up",
  Down = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.LEFT;

// if move === "left"
// if move === ArrowKeys.LEFT

enum ArrowKeys2 {
  Up = "up",
  Down = "down",
  LEFT = "left",
  RIGHT = "right",
}
