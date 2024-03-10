const randomNumber = [3, 301, 39, 59, 1, 96, 77, 20, 219, 189]
randomNumber.push (10, 98)
let number = 50;
// Ho creato un Array di numeri e ho mandato a stampa nella console del browser l'elenco.
// Ho aggiunto all'Array due numeri.

console.log("Numeri inferiori a", number + ":");
// Mando a schermo "Numeri inferiori a" number, ovvero 50.

for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] < number) {
        console.log(randomNumber[i]);
    }
}
// Ciclo For. Creo una variabile, "i", e le assegno un valore, 0. Finché la variabile "i" è inferiore a randomNumber, si ha un incremento.
// Nel successivo "console.log" sono stampanti in console i numeri inferiori a 50. 

console.log("Numeri uguali o superiori a", number + ":");
// Mando a  schermo "Numeri uguali o superiori a" number, ovvero 50.

for (let i = 0; i < randomNumber.length; i++) {
    if (randomNumber[i] >= number) {
        console.log(randomNumber[i]);
    }
}
// Ciclo For. Creo una variabile, "i", e la incremento fino a che è vera la condizione che "i" è inferiore ai numeri presenti nell'Array.
// Nel successivo "console.log" sono stampati i numeri uguali o superiori a 50.