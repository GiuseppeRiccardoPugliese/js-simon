/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// 1 visualizzare in pagina 5 numeri CASUALI
// Dopo aver visualizzato i numeri, parte un timer di 30 secondi
// Dopo i 30 secondi, i numeri scompaiono
//Far inserire all'utente i numeri che ha visto precedentemente
//Dopo che sono stati inseriti i 5 numeri, ci viene detto quanti e quali numeri da indovinare sono stati individuati

let arrayNumb = [];
const numbToShow = document.getElementById('numbers_show');
const btnStart = document.getElementById('start');
const userNumbers = document.getElementById('user_numb');
const btnCheckUserNum = document.getElementById('check_numb');
let seconds = 30;
let punteggio = 0;


//Start del timer
btnStart.addEventListener('click',
    function () {
        document.getElementById("numbers_show").style.display = "block";
        arrayNumb = [];
        setTimeout(timeFunc, seconds * 1000);

        //Creo 5 numeri in pagina utilizzando una funzione per dare numeri casuali
        for (let i = 0; i < 5; i++) {
            arrayNumb.push(genRandomNum(1, 100));
            numbToShow.innerHTML = arrayNumb;
        }
    }
);
console.log(arrayNumb);

btnCheckUserNum.addEventListener('click',
    function () {
        let checkNumber = userNumbers.value;
        if (arrayNumb.includes(checkNumber)) {
            punteggio++;
        }
    }
)




/*************************************************
    FUNZIONI
 *************************************************/
function genRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timeFunc() {
    document.getElementById("numbers_show").style.display = "none";
}