let paires = [
    [0, ""], [0, "0"], [0, false], ["", false], 
    [null, undefined], [null, false], [NaN, NaN], 
    [1, "1"], [" \t\n ", 0]
];

let diffCount = 0;

for (let i = 0; i < paires.length; i++) {
    let v1 = paires[i][0];
    let v2 = paires[i][1];
    
    let resEq = (v1 == v2);
    let resStrict = (v1 === v2);
    
    if (resEq === true && resStrict === false) {
        diffCount++;
    }
    
    // Formatage pour l'affichage (gestion spéciale des types pour le log)
    let s1 = typeof v1 === "string" ? `"${v1}"` : v1;
    let s2 = typeof v2 === "string" ? `"${v2}"` : v2;
    
    console.log(`${s1} == ${s2} \t -> ${resEq}    |   ${s1} === ${s2} \t -> ${resStrict}`);
}

console.log("---");
console.log(diffCount + " paire(s) où == et === donnent des résultats différents");