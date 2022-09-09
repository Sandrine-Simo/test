//declaration des structures de donnees
function Debouche(code, nom) {
    this.codeD = code;
    this.nomD = nom;
}
function Matiere(code, nom, volumeHoraire, nomE, assistant, estPratique) {
    this.codeM = code;
    this.nomM = nom;
    this.vH = volumeHoraire;
    this.nomE = nomE;
    this.assistant = assistant;
    this.estPratique = estPratique;
}
function Parcours(nom, Debouche) {
    this.nomP = nom;
    this.Debouche = Debouche;
}
function Note(note, matiere) {
    this.note = note;
    this.matiere = matiere
}
function Etudiant(nomE, prenomE, date, lieuNaissance, sexe, taille, poids, parcours, listeNotes) {
    this.nomE = nomE;
    this.prenomE = prenomE;
    this.date = date;
    this.lieuNaissance = lieuNaissance;
    this.sexe = sexe;
    this.taille = taille;
    this.poids = poids;
    this.parcours = parcours;
    this.listeNotes = listeNotes;
}
var listeNotes = new Array();
let addNotesBtn = document.getElementById('addNotes');
console.log(addNotesBtn);
addNotesBtn.addEventListener('click', function ajouterNotes(e) {

    e.preventDefault();
    //on récupère la valeur choisie ds le select
    let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
    let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
    let matvalue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
    //console.log(matvalue);//on affiche dans la console
    let inputNotes = document.getElementById('notes');
    let note = inputNotes.value;

    let element = new Note(note, matvalue);
    listeNotes.push(element);

    // console.log(element);
    console.log(listeNotes);
    let ligne = document.createElement('tr');//on crée une ligne pour afficher les valeurs kon a récupéré plus haut

    let cellule1 = document.createElement('td');
    cellule1.innerHTML = matvalue;

    let cellule2 = document.createElement('td');
    cellule2.innerHTML = note;
    inputNotes.value = '';

    let cellule3 = document.createElement('td');
    let btn1 = document.createElement('button');

    btn1.innerHTML = '+';//on met le contenu du bouton
    let btn2 = document.createElement('button');
    btn2.innerHTML = '-';

    cellule3.appendChild(btn1);
    cellule3.appendChild(btn2);
    ligne.appendChild(cellule1);
    ligne.appendChild(cellule2);
    ligne.appendChild(cellule3);
    let Tnotes = document.getElementById('Tnotes');
    Tnotes.appendChild(ligne);

    //console.log(listeNotes);
    btn2.addEventListener('click', function supprimerNotes() {
        ligne.innerHTML = '';

    });
    btn1.addEventListener('click', function modifierNotes() {
        let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
        let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
        let matvalue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
        //console.log(matvalue);//on affiche dans la console
        let inputNotes = document.getElementById('notes');
        let note = inputNotes.value;
        cellule1.innerHTML = matvalue;
        cellule2.innerHTML = note;
    })

})

function ajouterNotes() {


    //on récupère la valeur choisie ds le select
    let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
    let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
    let matvalue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
    //console.log(matvalue);//on affiche dans la console
    let inputNotes = document.getElementById('notes');
    let note = inputNotes.value;

    let element = new Note(note, matvalue);
    listeNotes.push(element);
    console.log(element);

    console.log(listeNotes);
    let ligne = document.createElement('tr');//on crée une ligne pour afficher les valeurs kon a récupéré plus haut

    let cellule1 = document.createElement('td');
    cellule1.innerHTML = matvalue;

    let cellule2 = document.createElement('td');
    cellule2.innerHTML = note;
    inputNotes.value = '';

    let cellule3 = document.createElement('td');
    let btn1 = document.createElement('button');

    btn1.innerHTML = '+';//on met le contenu du bouton
    let btn2 = document.createElement('button');
    btn2.innerHTML = '-';

    cellule3.appendChild(btn1);
    cellule3.appendChild(btn2);
    ligne.appendChild(cellule1);
    ligne.appendChild(cellule2);
    ligne.appendChild(cellule3);
    let Tnotes = document.getElementById('Tnotes');
    Tnotes.appendChild(ligne);

    //console.log(listeNotes);
    btn2.addEventListener('click', function supprimerNotes(e) {
        e.preventDefault();
        ligne.innerHTML = '';

    });
    btn1.addEventListener('click', function modifierNotes(e) {
        e.preventDefault();
        let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
        let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
        let matvalue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
        //console.log(matvalue);//on affiche dans la console
        let inputNotes = document.getElementById('notes');
        let note = inputNotes.value;
        cellule1.innerHTML = matvalue;
        cellule2.innerHTML = note;
    })

}

var listeEtudiants = new Array();
let addEtudiantBtn = document.getElementById('addEtudiant');
addEtudiantBtn.addEventListener('click', function ajouterEtudiant(e) {
    e.preventDefault();

    // recupere les valeurs sasies par l'utiliateur

    let inputName = document.getElementById('name');
    let name = inputName.value;
    console.log(name);

    let inputFirstName = document.getElementById('firstname');
    let firstname = inputFirstName.value;
    console.log(firstname);

    let inputPlaceOfBorn = document.getElementById('placeofborn');
    let placeOfBorn = inputPlaceOfBorn.value;
    console.log(placeOfBorn);

    let parcoursList = document.getElementById('parcours');
    let choice = parcoursList.selectedIndex;
    let parcours = parcoursList.options[choice].value;
    console.log(parcours);

    let inputHeight = document.getElementById('height');
    let height = inputHeight.value;

    let inputWeight = document.getElementById('weight');
    let weight = inputWeight.value;
    console.log(weight);

    let sexvalue;
    if (document.getElementById('homme').checked) {
        sexvalue = document.getElementById('homme').value;
    }
    if (document.getElementById('femme').checked) {
        sexvalue = document.getElementById('femme').value;
    }
    console.log(sexvalue);

    let dateOfBirth = document.getElementById('dateofborn').value;
    console.log(sexvalue);

    let etudiant = new Etudiant(name, firstname, placeOfBorn, parcours, height, weight, sexvalue, dateOfBirth, listeNotes);
    listeEtudiants.push(etudiant);

    //on affiche ds le tableau
    let Tetudiants = document.getElementById('Tetudiants');

    let ligne = document.createElement('tr');

    let cellule1 = document.createElement('td');
    cellule1.innerHTML = name;
    inputName.value = '';

    let cellule2 = document.createElement('td');
    cellule2.innerHTML = firstname;
    inputFirstName.value = '';

    let cellule3 = document.createElement('td');
    cellule3.innerHTML = placeOfBorn;
    inputPlaceOfBorn.value = '';

    let cellule4 = document.createElement('td');
    cellule4.innerHTML = parcours;

    let cellule5 = document.createElement('td');
    cellule5.innerHTML = height;
    inputHeight.value = '';

    let cellule6 = document.createElement('td');
    cellule6.innerHTML = weight;
    inputWeight.value = '';

    let cellule7 = document.createElement('td');
    cellule7.innerHTML = sexvalue;

    let cellule8 = document.createElement('td');
    cellule8.innerHTML = dateOfBirth;

    let cellule9 = document.createElement('td');
    cellule9.innerHTML = listeNotes;
    console.log(listeNotes);

    ligne.appendChild(cellule1);
    ligne.appendChild(cellule2);
    ligne.appendChild(cellule3);
    ligne.appendChild(cellule4);
    ligne.appendChild(cellule5);
    ligne.appendChild(cellule6);
    ligne.appendChild(cellule7);
    ligne.appendChild(cellule8);
    ligne.appendChild(cellule9);

    Tetudiants.appendChild(ligne);
    console.log(listeEtudiants);

})

function ajouterEtudiant() {
    // recupere les valeurs sasies par l'utiliateur
    // let inputName = document.getElementById('name');
    // let name = inputName.value;
    // console.log(name);
    // let inputFirstName = document.getElementById('firstname');
    // let firstname = inputFirstName.value;
    // console.log(firstname);

    // let inputPlaceOfBorn = document.getElementById('placeofborn');
    // let placeOfBorn = inputPlaceOfBorn.value;
    // console.log(placeOfBorn);

    let parcoursList = document.getElementById('parcours');
    let choice = parcoursList.selectedIndex;
    let parcours = parcoursList.options[choice].value;
    console.log(parcours);

    // let inputHeight = document.getElementById('height');
    // let height = inputHeight.value;

    // let inputWeight = document.getElementById('weight');
    // let weight = inputWeight.value;
    // console.log(weight);

    // let sexvalue;
    // if (document.getElementById('homme').checked) {
    //     sexvalue = document.getElementById('homme').value;
    // }
    // if (document.getElementById('femme').checked) {
    //     sexvalue = document.getElementById('femme').value;
    // }
    // console.log(sexvalue);

    // let dateOfBirth = document.getElementById('dateofborn').value;
    // console.log(sexvalue);

    // //on affiche ds le tableau
    // let Tetudiants = document.getElementById('Tetudiants');

    // let ligne = document.createElement('tr');

    // let cellule1 = document.createElement('td');
    // cellule1.innerHTML = name;
    // inputName.value = '';

    // let cellule2 = document.createElement('td');
    // cellule2.innerHTML = firstname;
    // inputFirstName.value = '';

    // let cellule3 = document.createElement('td');
    // cellule3.innerHTML = firstname;
    // inputFirstName.value = '';

    // let cellule4 = document.createElement('td');
    // cellule4.innerHTML = placeOfBorn;
    // inputPlaceOfBorn.value = '';

    // let cellule5 = document.createElement('td');
    // cellule5.innerHTML = parcours;

    // let cellule6 = document.createElement('td');
    // cellule6.innerHTML = height;
    // inputHeight.value = '';

    // let cellule7 = document.createElement('td');
    // cellule7.innerHTML = weight;
    // inputWeight.value = '';

    // let cellule8 = document.createElement('td');
    // cellule8.innerHTML = sexvalue;

    // let cellule9 = document.createElement('td');
    // cellule9.innerHTML = dateOfBirth;

    // let cellule10 = document.createElement('td');
    // cellule10.innerHTML = listeNotes;
    // console.log(listeNotes);

    // ligne.appendChild(cellule1);
    // ligne.appendChild(cellule2);
    // ligne.appendChild(cellule3);
    // ligne.appendChild(cellule4);
    // ligne.appendChild(cellule5);
    // ligne.appendChild(cellule6);
    // ligne.appendChild(cellule7);
    // ligne.appendChild(cellule8);
    // ligne.appendChild(cellule9);

    // Tetudiants.appendChild(ligne);

}


