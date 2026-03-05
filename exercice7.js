let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null; // Essayez avec "PROMO10" pour tester
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;


let sousTotal = prix * quantite;
console.log("Sous-total : " + sousTotal);


let reduction = 0;
if (codePromo !== null && estMembre === true) {
    reduction = sousTotal * (reductionPourcentage / 100);
}
console.log("Réduction : " + reduction);


let total = sousTotal - reduction;


let statut = "";
if (soldeCompte >= total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}
console.log(statut);


let nouveauSolde = soldeCompte;
if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - total;
    console.log("Nouveau solde : " + nouveauSolde);
}

console.log("\n RÉCAPITULATIF");
console.log("Produit   : " + nomProduit);
console.log("Quantité  : " + quantite);
console.log("Prix unit.: " + prix + " MAD");
console.log("Sous-total: " + sousTotal + " MAD");
console.log("Réduction : " + reduction + " MAD");
console.log("Total     : " + total + " MAD");
console.log("Statut    : " + statut);
console.log("Solde     : " + nouveauSolde + " MAD");
console.log("=========================");