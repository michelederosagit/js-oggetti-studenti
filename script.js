// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.


// Creo oggetto studente
var studente = {
    "nome": "michele",
    "cognome": "de rosa",
    "età" : "23"
    };

    // console.log(studente);

// Stampo a schermo attraverso il for in tutte le proprietà
for (var datistudente in studente) {
    console.log(datistudente + " = " + studente[datistudente]);
    }
// console.log(studente);

// Creo un array di oggetti di studenti
var arraystudenti = [
    {
        "nome": "Nunzio",
        "cognome": "norbani",
        "età": "22"
    },

    {
        "nome": "pasquale",
        "cognome": "nocerino",
        "età": "28"
    },

    {
        "nome": "francesco",
        "cognome": "porcelli",
        "età": "32"
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < arraystudenti.length; i++){
    console.log(arraystudenti[i].nome, arraystudenti[i].cognome, arraystudenti[i].età)
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.

var nome = prompt('Inserisci un nome');
var cognome = prompt('Inserisci un cognome');
var età = prompt('Inserisci un età');

arraystudenti.push({"nome": nome, "cognome": cognome, "età": età});


// Stampo a schermo arraystudenti per verificare la corretta esecuzione
console.log("L'array studenti contiene = ", arraystudenti);