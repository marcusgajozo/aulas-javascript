// aula de função de callback

// gera numero aleatório
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  // funcao de callback
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

// FUNCAO CALLBACK
f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá mundo!");
    });
  });
});



function f1callback() {
    f2(f2callback)
}
