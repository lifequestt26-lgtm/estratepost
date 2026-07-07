async function validarLogin() {
    const input = document.getElementById('passInput').value;
    try {
        const resp = await fetch('config.json');
        const config = await resp.json();
        if (input === config.senhaSemanal || input === config.senhaMensal) iniciarApp();
        else alert("Senha incorreta!");
    } catch(e) {
        if (input === "26" || input === "2026") iniciarApp();
        else alert("Erro: O arquivo de senha não foi encontrado.");
    }
}

function iniciarApp() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'block';
}

function calcular() {
    const total = parseFloat(document.getElementById('stake').value);
    const odd0x0 = parseFloat(document.getElementById('odd0x0').value);
    const oddLay = parseFloat(document.getElementById('oddLay').value);

    if (!total || !odd0x0 || !oddLay) return alert("Preencha todos os campos!");

    const v0x0 = total * 0.10;
    const vLay = total * 0.90;
    
    // Lucro estimado: (StakeLay * (OddLay / 1.5)) - Total
    const lucro = (vLay * (oddLay / 1.5)) - total;

    const res = document.getElementById('resultado');
    res.style.display = 'block';
    res.innerHTML = `
        <div class="res-item"><b>Entrada Back 0x0:</b> R$ ${v0x0.toFixed(2)}</div>
        <div class="res-item"><b>Entrada Lay Empate:</b> R$ ${vLay.toFixed(2)}</div>
        <div class="res-item" style="color: #00e676; font-size: 1.2em;">
            💰 <b>Lucro Estimado: R$ ${lucro.toFixed(2)}</b>
        </div>
        <p style="font-size: 0.8em; margin-top:10px;">*Este valor é uma estimativa baseada no fechamento após o gol.</p>
    `;
}