function calcular() {
    const total = parseFloat(document.getElementById('stake').value);
    if (isNaN(total) || total <= 0) return alert("Digite um valor válido.");
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Impede o navegador de mostrar o prompt padrão imediatamente
    e.preventDefault();
    deferredPrompt = e;
    
    // Mostra o botão de instalar que criamos no HTML
    const btnInstalar = document.getElementById('btnInstalar');
    btnInstalar.style.display = 'block';

    btnInstalar.addEventListener('click', (e) => {
        btnInstalar.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou a instalação');
            }
            deferredPrompt = null;
        });
    });
});
    const valor0x0 = total * 0.10;
    const valorLay = total * 0.90;

    const divRes = document.getElementById('resultado');
    divRes.style.display = 'block';
    divRes.innerHTML = `
        <div style="background:#333; padding:10px; border-radius:5px; margin-bottom:10px;">
            <p style="color:white;">💰 <b>Aposta Back 0x0 (Proteção):</b> R$ ${valor0x0.toFixed(2)}</p>
            <p style="color:white;">📉 <b>Aposta Lay Empate:</b> R$ ${valorLay.toFixed(2)}</p>
        </div>
        <div style="background:#1b5e20; padding:10px; border-radius:5px;">
            <p style="color:#00e676;">✅ <b>Gol do Favorito:</b> Lucro imediato.</p>
            <p style="color:#fff;">⚖️ <b>Gol do Azarão:</b> Recuperação de capital.</p>
            <p style="color:#ff5252;">⚠️ <b>0x0 até 60':</b> Perda controlada de 10%.</p>
        </div>
    `;
}
