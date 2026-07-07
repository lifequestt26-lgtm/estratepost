async function validarLogin() {
    const resposta = await fetch('config.json');
    const config = await resposta.json();
    const input = document.getElementById('passInput').value;
    
    if (input === config.senhaSemanal || input === config.senhaMensal) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    } else {
        alert("Senha incorreta!");
    }
}

function calcular() {
    const total = parseFloat(document.getElementById('stake').value);
    const perda0x0 = total * 0.10; // 10%
    const stake0x0 = perda0x0; // O que você põe no 0x0
    const stakeLayEmpate = total - stake0x0;
    
    document.getElementById('resultado').innerHTML = `
        <p><b>Proteção 0x0 (10%):</b> R$ ${stake0x0.toFixed(2)}</p>
        <p><b>Lay Empate:</b> R$ ${stakeLayEmpate.toFixed(2)}</p>
        <hr>
        <p>Se sair gol do FAVORITO: <b>Lucro Estimado</b></p>
        <p>Se sair gol do NÃO FAVORITO: <b>Recuperação (Break-even)</b></p>
        <p>Se terminar 0x0: <b>Perda controlada de 10%</b></p>
    `;
}