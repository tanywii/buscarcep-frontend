function fibonacci(n) {
    let sequencia = [];
    if (n >= 1) {
        sequencia.push(1);
    }
    if (n >= 2) {
        sequencia.push(1);
    }
    for (let i = 2; i < n; i++) {
        let proximoNumero = sequencia[i - 1] + sequencia[i - 2];
        sequencia.push(proximoNumero);
    }
    return sequencia;
}

let input = 6
let resultado = fibonacci(num);
console.log("Output:", resultado);
