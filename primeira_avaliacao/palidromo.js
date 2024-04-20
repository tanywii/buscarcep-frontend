function verificarPalindromo(str) {
    str = str.toLowerCase().replace(/\s/g, '');

    let inicio = 0;
    let fim = str.length - 1;

    while (inicio < fim) {
        if (str[inicio] !== str[fim]) {
            return false;
        }
        inicio++;
        fim--;
    }

    return true;
}

const input = "arara";
console.log(verificarPalindromo(input));