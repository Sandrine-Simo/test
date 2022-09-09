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