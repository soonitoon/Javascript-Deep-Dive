function add(x, y, z) {
  if (arguments.length !== 3) throw Error("인수의 개수가 잘못됐습니다.");
  if (typeof x !== "number" || typeof y !== "number" || typeof z !== "number")
    throw TypeError("인수 중 하나 이상이 number 타입이 아닙니다.");

  return x + y + z;
}

add(1, 2, 3, 4, 5);