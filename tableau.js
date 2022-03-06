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

let arrayHabitants = [38000000, 67000000, 444000, 4059000, 1448471000, 7481000, 46719000, 1275000, 40000, 334805000];

function calculTotal(tableau){
    let total = 0;
    tableau.forEach(element => {
        total = total + element;
    });
    console.log("Le nombre total d'habitant: " + total);
}

calculTotal(arrayHabitants);

function calculMoyenne(tableau) {
    let total = 0;
    tableau.forEach(element => {
        total = total + element;
    });
    let moyenne = total / tableau.length;
    console.log("Le nombre moyenne d'habitant: " + moyenne);
}

calculMoyenne(arrayHabitants);

function calculHabitantSup(nombre, tableau) {
    let total = 0;
    tableau.forEach(element => {
        if(element >= nombre){
            total++;
        }
    });
    console.log("Nombre de pays avec plus de " + nombre + " d'habitants: " + total);
}

calculHabitantSup(10000000, arrayHabitants);

let arrayFilm = ["Harry Potter", "Star Wars", "Hobbit", "Matrix 4", "Seigneur des anneaux", "Grease", "Tron", "Charlie et la chocolaterie", "Spirit"];

function findIndex(tableau, string){
    for(i in tableau){
        if(tableau[i] == string){
            let position = parseInt(i) + 1;
            console.log("Le film se trouve a la position " + position + " du tableau et index " + i);
        }
    }
}

findIndex(arrayFilm, "Matrix 4");
