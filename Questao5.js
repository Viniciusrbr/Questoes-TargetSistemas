let minhaString = "Minha string invertida";
let stringInvertida = "";

// loop que percorre a string de trás para frente
for (let i = minhaString.length - 1; i >= 0; i--) {
    stringInvertida += minhaString[i];
}

console.log(stringInvertida); // "aditrevni gnirts ahniM"