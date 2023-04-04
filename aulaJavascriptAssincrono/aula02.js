function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg + ' - Passei na promise');
        }, tempo);
    });
}

// const promises = [
//     esperaAi('Promise 1', 300),
//     esperaAi('Promise 2', 5789),
//     esperaAi(1000, 894156),
// ]

// Promise.race(promises)
//     .then(valor => console.log(valor))
//     .catch(e => console.log(e));

function baixaPagina() {
    const emCache = true;
    if (emCache) return Promise.reject('Página em cache');
    else return esperaAi('Baixei a pagina', 3000);
}

baixaPagina()
    .then(v => console.log(v))
    .catch(e => console.log('ERRO: ' + e));