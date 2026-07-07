async function validarLogin() {
    const input = document.getElementById('passInput').value;
    try {
        const resposta = await fetch('config.json');
        const config = await resposta.json();
        if (input === config.senhaSemanal || input === config.senhaMensal) {
            liberarAcesso();
        } else { alert("Senha incorreta!"); }
    } catch (e) {
        // Fallback se estiver rodando local sem servidor
        if (input === "26" || input === "2026") {
            liberarAcesso();
        } else { alert("Erro de conexão ou senha incorreta."); }
    }
}

function liberarAcesso() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'block';
}

function calcular() {
    const total = parseFloat(document.getElementById('stake').value);
    if (!total) return alert("Digite um valor!");
    const v0x0 = total * 0.10;
    const vLay = total * 0.90;
    const res = document.getElementById('resultado');
    res.style.display = 'block';
    res.innerHTML = `<p>Back 0x0: R$ ${v0x0.toFixed(2)}</p><p>Lay Empate: R$ ${vLay.toFixed(2)}</p>`;
}