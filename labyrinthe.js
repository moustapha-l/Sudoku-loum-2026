let graphe = [];
let visite = [];
let chemin = [];

function relier(graphe, a, b) {
    graphe[a][b] = 1;
    graphe[b][a] = 1;
    return graphe;
}

function Graphe() {
    for (let i = 0; i <= 9; i++) {
        graphe[i] = [];
        for (let j = 0; j <= 9; j++) {
            graphe[i][j] = 0;
        }
    }
    graphe = relier(graphe, 0, 1);
    graphe = relier(graphe, 1, 2);
    graphe = relier(graphe, 1, 4);
    graphe = relier(graphe, 2, 3);
    graphe = relier(graphe, 2, 5);
    graphe = relier(graphe, 5, 6);
    graphe = relier(graphe, 6, 7);
    graphe = relier(graphe, 6, 8);
    graphe = relier(graphe, 8, 9);
    return graphe;
}

function Chercher(graphe, depart, arrivee, visite, chemin) {
    visite[depart] = true;
    chemin.push(depart);
    if (depart === arrivee) {
        return true;
    }
    for (let voisin = 0; voisin <= 9; voisin++) {
        if (graphe[depart][voisin] === 1) {
            if (visite[voisin] === false) {
                if (Chercher(graphe, voisin, arrivee, visite, chemin) === true) {
                    return true;
                }
            }
        }
    }
    chemin.pop();
    return false;
}

graphe = Graphe();
for (let i = 0; i <= 9; i++) {
    visite[i] = false;
}
chemin = [];

if (Chercher(graphe, 0, 9, visite, chemin) === true) {
    console.log(chemin);
} else {
    console.log("Chemin null");
}