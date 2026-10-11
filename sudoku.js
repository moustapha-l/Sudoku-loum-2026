function PresenceSurLigne(grille, ligne, chiffre) {
    for (let colonne = 0; colonne <= 8; colonne++) {
        if (grille[ligne][colonne] === chiffre) {
            return true;
        }
    }
    return false;
}
 
function PresenceDansColonne(grille, colonne, chiffre) {
    for (let ligne = 0; ligne <= 8; ligne++) {
        if (grille[ligne][colonne] === chiffre) {
            return true;
        }
    }
    return false;
}
 
function PresenceDansZone(grille, ligne, colonne, chiffre) {
    let ligneDebut = Math.floor(ligne / 3) * 3;
    let colonneDebut = Math.floor(colonne / 3) * 3;
    for (let i = ligneDebut; i <= ligneDebut + 2; i++) {
        for (let j = colonneDebut; j <= colonneDebut + 2; j++) {
            if (grille[i][j] === chiffre) {
                return true;
            }
        }
    }
    return false;
}
 
function validation(grille, position) {
    if (position === 81) {
        return true;
    }
 
    let ligne = Math.floor(position / 9);
    let colonne = position % 9;
 
    if (grille[ligne][colonne] !== 0) {
        return validation(grille, position + 1);
    }
 
    for (let chiffre = 1; chiffre <= 9; chiffre++) {
        if (PresenceSurLigne(grille, ligne, chiffre) === false) {
            if (PresenceDansColonne(grille, colonne, chiffre) === false) {
                if (PresenceDansZone(grille, ligne, colonne, chiffre) === false) {
                    grille[ligne][colonne] = chiffre;
                    if (validation(grille, position + 1) === true) {
                        return true;
                    }
                }
            }
        }
    }
 
    grille[ligne][colonne] = 0;
    return false;
}

let grille = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
 
if (validation(grille, 0) === true) {
    for (let i = 0; i <= 8; i++) {
        let texte = "";
        for (let j = 0; j <= 8; j++) {
            texte = texte + grille[i][j] + " ";
        }
        console.log(texte);
    }
} else {
    console.log("Pas de solution");
}