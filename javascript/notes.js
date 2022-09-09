
function ajouterNotes(e) {

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
    btn2.addEventListener('click', supprimerNotes());
    btn1.addEventListener('click', modifierNotes())
}

function modifierNotes(e) {
    e.preventDefault();
    let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
    let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
    let matvalue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
    //console.log(matvalue);//on affiche dans la console
    let inputNotes = document.getElementById('notes');
    let note = inputNotes.value;
    cellule1.innerHTML = matvalue;
    cellule2.innerHTML = note;
}

function supprimerNotes(e) {
    e.preventDefault();
    ligne.innerHTML = '';
}