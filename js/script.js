// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50


// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
function play (){
    var range = 100;
    var num = 16;
    var numRand = generaRand(range,num);
    console.log(numRand);

    // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.L’utente non può inserire più volte lo stesso numero.
    var listUtente = [];
    var count = 0;
    var chiudi = true;
    while (count < (range - num) && chiudi) {

        var numUtente = parseInt(prompt('dammi un numero da 1 a 100'));
        if (listUtente.includes(numUtente)){
            alert('devi inserire  un numero da 1 a 100 che non hai inserito in precedenza')
        } else {
            listUtente.push(numUtente);
            count++;
        }

        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        // console.log(listUtente);
        // console.log(count);
        if (numRand.includes(numUtente)) {
            chiudi = false;
        }
    }

    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

    // se riesci nell'impresa dico ch hai vinto
    if (count == (range - num) && chiudi) {
        alert('WOW Hai vinto');
    } else {
        alert('hai perso hai preso una bomba');
        console.log('hai superato ' + --count + ' round');
        console.log('i numeri inseriti sono ' + listUtente);
    }

}
document.getElementById('gioca').addEventListener('click', play);










// funzione random numeri
function generaRand(range,num) {
    var arr =[];
    while (arr.length < num) {
        var a = Math.floor((Math.random() * range)+1);
        if (!arr.includes(a)) {
            arr.push(a);
        }
    }
    return arr;
}