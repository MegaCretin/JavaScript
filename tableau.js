function compteNoteInfMoyenne(tableau){
    let i = 0;
    tableau.forEach(element => {
        if (element < 10){
            i = i + 1;
        }
    });
    return i;
}

let arrayNombre = [3, 14,  15, 3, 5, 9, 19, 10];

let noteInf = compteNoteInfMoyenne(arrayNombre);

console.log(noteInf);

function changementDeJanEnJean(tableau) {
    let index = tableau.indexOf("Jan");
    if (index > 0){
        tableau.splice(index, 1, "Jean")
    }
    return tableau;
}

let arrayPrenom = ["Pierre", "Marie", "Jan", "Paul"];

console.log(changementDeJanEnJean(arrayPrenom));

function trouvePlusPetitEtPlusGrand(tableau) {
    let numberMax = 0;
    let numberMin = 100000;

    tableau.forEach(element => {
        if (numberMin > element){
            numberMin = element;
        }

        if (numberMax < element){
            numberMax = element; 
        }
    });

    console.log("Le plus petit: " + numberMin + " Le plus grand: " + numberMax);
}

trouvePlusPetitEtPlusGrand(arrayNombre);


let phraseNomPrenom = "Bonjour Jean Dupont";

function extraireNomPrenom(phrase){
    let array = phrase.split(" ");
    let prenom = array[1];
    let nom = array[2];

    console.log("Nom: " + nom + " Prenom: " + prenom);
}

extraireNomPrenom(phraseNomPrenom);