function Fibonacci(num) {
    let a = 0; // 1º numero da sequencia
    let b = 1; // 2º numero da sequencia
    let c = a + b; // soma dos 2 numeros anteriores

    while (c <= num) {
        if (c === num) {
            return true;
        }

        a = b;
        b = c;
        c = a + b;
    }

    return false;
}


console.log(Fibonacci(8)); // true
console.log(Fibonacci(9)); // false

/*

numeros da sequencia de fibonacci:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,.....

*/