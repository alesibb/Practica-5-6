function calcularCambio() {
    const denominaciones = [
        { nombre: "monedas de 100 pesos", valor: 100 },
        { nombre: "monedas de 50 pesos", valor: 50 },
        { nombre: "monedas de 20 pesos", valor: 20 },
        { nombre: "monedas de 10 pesos", valor: 10 },
        { nombre: "monedas de 5 pesos", valor: 5 },
        { nombre: "monedas de 1 peso", valor: 1 },
        { nombre: "monedas de 50 centavos", valor: 0.50 },
        { nombre: "monedas de 20 centavos", valor: 0.20 },
        { nombre: "monedas de 1 centavo", valor: 0.01 },
    ];

    const monto = parseFloat(document.getElementById('monto').value);
    const pago = parseFloat(document.getElementById('pago').value);

    if (isNaN(monto) || isNaN(pago) || monto <= 0 || pago <= 0) {
        document.getElementById('resultado').textContent = "Por favor, ingrese montos válidos.";
        document.getElementById('resultado').style.color = "red";
        return;
    }

    let cambio = pago - monto;

    if (cambio < 0) {
        document.getElementById('resultado').textContent = "El monto pagado es insuficiente.";
        document.getElementById('resultado').style.color = "red";
        return;
    }

    let resultado = `Cambio: $${cambio.toFixed(2)}\n`;

    denominaciones.forEach(denominacion => {
        const cantidad = Math.floor(cambio / denominacion.valor);
        cambio = (cambio % denominacion.valor).toFixed(2);
        resultado += `${cantidad} ${denominacion.nombre}\n`;
    });

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('resultado').style.color = "green";
}
