let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = [
    { n: "nom", v: nom },
    { n: "age", v: age },
    { n: "ville", v: ville },
    { n: "score", v: score },
    { n: "actif", v: actif }
];

console.log(" Partie A (??)");
for (let item of variables) {
    console.log(`${item.n} ?? "valeur par défaut" \t -> ${item.v ?? "valeur par défaut"}`);
}

console.log("\n Partie B (||) ");
for (let item of variables) {
    console.log(`${item.n} || "valeur par défaut" \t -> ${item.v || "valeur par défaut"}`);
}

console.log("\n Partie C (Comparaison)");
for (let item of variables) {
    let resNullish = item.v ?? "valeur par défaut";
    let resOr = item.v || "valeur par défaut";
    let status = (resNullish === resOr) ? "même résultat" : "résultat différent";
    console.log(`${item.n.padEnd(6)} : ?? et || -> ${status}`); // j'utilise la fonction padend , pour aligner parfaiment les lignes .
}