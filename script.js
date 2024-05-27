

// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const ambassadors = [];
const notAmbassadors = [];
const users = [];
let cart = 0;



const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 25, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!
users.push(marco, paul, amy);

for(let i = 0; i < users.length; i++) {
  

  if(users[i].isAmbassador === false) {
    console.log(users[i].name, users[i].lastName, "non è un ambassador")
    notAmbassadors.push(users[i])
   } else if(users[i].isAmbassador === true) {
    console.log(users[i].name, users[i].lastName, "è un ambassador");
    ambassadors.push(users[i]) 
   }
   
 
 
}


  
console.log(users)
console.log(ambassadors)
console.log(notAmbassadors)

function findTheTotal(prices, utenteCheEffettuaLAcquisto, shippingCost) {

 
 for(let i = 0; i< prices.length; i++) {
  cart += prices[i];
  
}
if(utenteCheEffettuaLAcquisto.isAmbassador) {
cart = cart * 0.7;
} 
if(cart > 100) {
  shippingCost = 0
  console.log("hai diritto alla spedizione gratuita")
} else {
  cart = cart + shippingCost;
}
return cart

}
console.log(findTheTotal(prices, utenteCheEffettuaLAcquisto, shippingCost))

  
  




// Esercizio 1: Trova il numero più grande
// Descrizione: Scrivi una funzione maxNumber che prende in input un ARRAY di numeri e restituisce il 
// numero più grande nell'array.

// es: maxNumber([1, 2, 3, 4, 5]); // -> l'output dovrebbe essere 5
let numbers = [1,5,8,12,4,3]
let maxValue = numbers[0]; 
function maxNumber(numbers) {
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  } return maxValue

} console.log(maxNumber(numbers))



/*
Esercizio 2: Palindromo
Descrizione: Scrivi una funzione isPalindrome che prende in input una stringa e restituisce true se la stringa è un palindromo (si legge uguale da entrambi i lati) e false altrimenti.
*/

/*
isPalindrome("anna"); // true
isPalindrome("hello"); // false
*/

// suggerimento: metodi delle stringhe e degli array ti torneranno utili come ad esempio il metodo 
// reverse() (googlalo su MDN)
let words = "anna";
let reversedWords = "";
function isPalindrome(words) {
  for(let i = words.length - 1; i >= 0; i--) {
    reversedWords += words[i]
    }
    return reversedWords === words

   

    }
  
  

 
console.log(isPalindrome(words))




/*
Esercizio 4: Somma di numeri pari
Descrizione: Scrivi una funzione sumEvenNumbers che prende in input un array di numeri e restituisce la somma di tutti i numeri pari nell'array.

sumEvenNumbers([10, 20, 30, 40]); // 100
*/

let arrayNumbers = [10, 20, 30, 40];
let sum = 0;
function sumEvenNumbers(arrayNumbers) {
  for(let i = 0; i < arrayNumbers.length; i++) {
    if(arrayNumbers[i] % 2 === 0) {
      sum += arrayNumbers[i];

    } 
  } return sum

} console.log(sumEvenNumbers(arrayNumbers))

/*
Esercizio 5: Rimuovi duplicati
Descrizione: Scrivi una funzione removeDuplicates che prende in input un array di numeri e restituisce un nuovo array senza duplicati.

suggerimento... includes() potrebbe essere il metodo che fa per te...o forse no?  

es: removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
*/
let arrayNumbers2 = [1, 2, 2, 3, 4, 4, 5];
let newArray = [];
function removeDuplicates(arrayNumbers2) {
  for(let i = 0; i < arrayNumbers2.length; i++)
    if (!newArray.includes(arrayNumbers2[i])) {
      newArray.push(arrayNumbers2[i])
    }
    return newArray
  
}
console.log(removeDuplicates(arrayNumbers2))

/*
Esercizio 7: Contare vocali
Descrizione: Scrivi una funzione countVowels che prende in input una stringa e restituisce il numero di vocali presenti nella stringa.

countVowels("javascript"); // 3
*/
 let word = "javascript";
 
 
function countVowels(word) {
  let contatore = 0;
  let vowels = "aeiou";
  for(let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      contatore++;
    }
  } return contatore
  
} console.log(countVowels(word))
  
