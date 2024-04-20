function encontrarNumeroNaoRepetido(nums) {
    let resultado = 0;

    for (let i = 0; i < nums.length; i++) {
        let soma = 0;

        for (let j = 0; j < nums.length; j++) {
            soma += (nums[j] >> i) & 1;
        }

        soma %= 3;

        resultado |= soma << i;
    }

    return resultado;
}

const nums = [5, 3, 4, 3, 5, 5, 3];
console.log(encontrarNumeroNaoRepetido(nums)); 