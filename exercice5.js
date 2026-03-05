let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let v = nombres[i];
    let label = "";

    if (Number.isNaN(v)) {
        label = "INVALIDE";
    } else if (v === Infinity || v === -Infinity) {
        label = "INFINI";
    } else if (v === 0 && (1 / v === -Infinity)) {
        label = "ZERO NEGATIF";
    } else if (Number.isSafeInteger(v)) {
        label = "ENTIER SUR";
    } else if (typeof v === 'number' && v % 1 === 0) {
        label = "ENTIER HORS LIMITES";
    } else {
        label = "DECIMAL";
    }
    
    console.log(v + " -> " + label);
}