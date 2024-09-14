function hanoi(n, origen, destino, auxiliar, movimientos) {
    if (n === 1) {
        movimientos.push(`Mueve el disco 1 de ${origen} a ${destino}`);
        return;
    }
    hanoi(n - 1, origen, auxiliar, destino, movimientos);
    movimientos.push(`Mueve el disco ${n} de ${origen} a ${destino}`);
    hanoi(n - 1, auxiliar, destino, origen, movimientos);
}

function resolverHanoi() {
    const numDiscos = parseInt(document.getElementById('numDiscos').value);
    const movimientos = [];
    
    if (isNaN(numDiscos) || numDiscos <= 0) {
        document.getElementById('resultado').textContent = "Por favor, ingrese un número válido de discos.";
        return;
    }

    hanoi(numDiscos, 'origen', 'destino', 'auxiliar', movimientos);
    document.getElementById('resultado').innerHTML = movimientos.join('<br>');
}
