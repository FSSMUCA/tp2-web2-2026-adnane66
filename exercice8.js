let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// Traitements
let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";

let ageNum = parseInt(age);
let ageStatus = (Number.isNaN(ageNum) || ageNum <= 0) ? "invalide" : ageNum + " (valide)";

let indexAt = email.indexOf("@");
let emailValide = (indexAt !== -1 && email.indexOf(".", indexAt) !== -1);
let emailStatus = `"${email}" (` + (emailValide ? "valide" : "invalide : pas de point après @") + ")";

let scoreExtraite = parseInt(scoreJeu);
if (Number.isNaN(scoreExtraite)) scoreExtraite = 0;

let adminBool = (estAdmin === "true");

let connexionLabel = derniereConnexion ?? "Jamais connecté";

let nbConnexNum = Number(nombreConnexions);
let nbConnexLabel = (nbConnexNum === 0) ? "Aucune connexion" : nbConnexNum;


console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageStatus}`);
console.log(`email            : ${emailStatus}`);
console.log(`scoreJeu         : ${scoreExtraite} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${adminBool} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexionLabel}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexLabel}" (${nbConnexNum} après conversion)`);
console.log("================================");