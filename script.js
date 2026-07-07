function calcular() {
    const total = parseFloat(document.getElementById('stake').value);
    const odd0x0 = parseFloat(document.getElementById('odd0x0').value);
    const oddLay = parseFloat(document.getElementById('oddLay').value);

    // Definição técnica: 10% do total no 0x0 como proteção
    const stake0x0 = total * 0.10; 
    const stakeLay = total * 0.90;

    // Cálculo do lucro na saída após gol (baseado na desvalorização da odd)
    // O lucro aqui é uma estimativa do payout da exchange
    const lucroEstimado = (stakeLay * (oddLay / 1.5)) - total; 

    const divRes = document.getElementById('resultado');
    divRes.style.display = 'block';
    divRes.innerHTML = `
        <p><b>Proteção 0x0:</b> R$ ${stake0x0.toFixed(2)}</p>
        <p><b>Lay Empate:</b> R$ ${stakeLay.toFixed(2)}</p>
        <hr>
        <p>💰 <b>Lucro Estimado após Gol:</b> R$ ${lucroEstimado.toFixed(2)}</p>
        <p>⚠️ <b>Stop Loss (0x0):</b> - R$ ${stake0x0.toFixed(2)}</p>
    `;
}