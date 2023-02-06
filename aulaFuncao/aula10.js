// funcao recursiva

function recursiva(num) {
    if (num == 0) return num;
    return (num + recursiva(num-1));
}

console.log(recursiva(5));
