// Il computer deve generare 16 numeri casuali tra 1 e 100. I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto) all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali: con difficoltà 0 => tra 1 e 100 con difficoltà 1 => tra 1 e 80 con difficoltà 2 => tra 1 e 50

document.getElementById('gioca').addEventListener('click', function(){
    document.getElementById('risultato').innerHTML = '';
    document.getElementById('numeri-inseriti').innerHTML = '';
    
    var risult = play();
    // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    // se riesci nell'impresa dico ch hai vinto
    var risultatoShow = 'Hai perso... Hai preso una bomba!!';
    var count;
    var numeriVincenti;
    if (risult[0] == risult[2] && risult[1]) {
        risultatoShow = 'WOW!! Hai vinto';
        numeriVincenti = 'i numeri vincenti inseriti sono: ' + risult[4];
    } else if(risult[3] == null && risult[0] < risult[2] && risult[1]){
        risultatoShow = 'grazie per aver giocato!! Alla prossima!!';
        numeriVincenti = 'i numeri vincenti inseriti sono: ' + risult[4];
    } else {
        if (risult[0] == 0) {
            count = 'hai superato ' + risult[0] + ' round';
        } else {
            count = 'hai superato ' + (risult[0] - 1) + ' round';
        }
        var lastElement = risult[4].pop();
        numeriVincenti = 'i numeri vincenti inseriti sono: ' + risult[4];

    }
    document.getElementById('risultato').innerHTML = risultatoShow;
    if (lastElement !== undefined){
        document.getElementById('numeri-inseriti').innerHTML = numeriVincenti + '<br>' + 'la bomba era ' + lastElement;
    } else {
        document.getElementById('numeri-inseriti').innerHTML = numeriVincenti;
    }


});



// INIZIO FUNZIONI 
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

        // chiedo un numero
        var numUtente = prompt('dammi un numero da 1 a 100');
        // se spingo cancel sul prompt 
        if ( numUtente == null){
            break;
        }
        numUtente = parseInt(numUtente);
        if (isNaN(numUtente) || numUtente < 1 || numUtente > 100) {
            alert('Puoi inserire solo numeri... Quest\'ultimi devono essere compresi tra 1 e 100')
        } else {
            if (listUtente.includes(numUtente)){
                alert('devi inserire  un numero da 1 a 100 che non hai inserito in precedenza')
            } else {
                listUtente.push(numUtente);
                count++;
            }
            // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

            if (numRand.includes(numUtente)) {
                chiudi = false;
            }
        }
    }
    // ritorno i valori della funzione 
    return [count, chiudi, range - num, numUtente, listUtente];
}
// fine funzione play 


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