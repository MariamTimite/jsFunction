// Fonctions de manipulation de chaînes

// Inverser une chaîne de caractères
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Compter le nombre de caractères dans une chaîne
function countCharacters(str) {
    return str.length;
}

// Mettre en majuscule la première lettre de chaque mot d'une phrase
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Fonctions sur les tableaux

// Trouver la valeur maximale d'un tableau
function findMax(arr) {
    return Math.max(...arr);
}

// Trouver la valeur minimale d'un tableau
function findMin(arr) {
    return Math.min(...arr);
}

// Calculer la somme des éléments d'un tableau
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filtrer un tableau selon une condition donnée
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Fonctions mathématiques

// Calculer la factorielle d'un nombre
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Vérifier si un nombre est premier
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Générer la suite de Fibonacci jusqu'à un certain nombre de termes
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

// Exemples d'utilisation
console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello")); // 5
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], num => num > 2)); // [3, 4, 5]
console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
