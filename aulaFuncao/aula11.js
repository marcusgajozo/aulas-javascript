// funcao geradora

function* geradora1() {
  // código qualquer ...
  yield "Valor 1";
  // código qualquer ...
  yield "Valor 2";
  // código qualquer ...
  yield "Valor 3";
}

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

function* geradora5() {
  yield function () {
    console.log("vim do y1");
  };

  // ...

  yield function () {
    console.log("vim do y2");
  };
}

const g5 = geradora5();
const fun1 = g5.next().value;
const fun2 = g5.next().value;

fun1();
fun2();
