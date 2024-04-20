function ordenarParesImpares(nums) {
    function comparar(a, b) {
        if (a % 2 === 0 && b % 2 !== 0) {
            return -1; 
        }
        if (a % 2 !== 0 && b % 2 === 0) {
            return 1; 
        }
        return 0;
    }

    nums.sort(comparar);

    return nums;
}

const input = [3, 1, 2, 4, 6, 5];
console.log(ordenarParesImpares(input)); 