let senhasProximas = [18, 12, 11, 10];
let senhasChamadas = [9, 4, 8, 7];  // Lista de senhas já chamadas

function atualizarFila() {
    const senhaList = document.getElementById('senha-list');
    senhaList.innerHTML = ''; // Limpa a tabela antes de renderizar novamente

    // Atualiza os "Próximos"
    senhasProximas.forEach(prox => {
        const proxDiv = document.createElement('div');
        proxDiv.className = 'prox';
        proxDiv.textContent = prox;
        senhaList.appendChild(proxDiv);
    });

    // Atualiza os "Chamados"
    senhasChamadas.forEach(cham => {
        const chamDiv = document.createElement('div');
        chamDiv.className = 'cham';
        chamDiv.textContent = cham;
        senhaList.appendChild(chamDiv);
    });
}

function chamarSenha() {
    if (senhasProximas.length > 0) {
        // Mover o primeiro número da lista "Próximos" para o fim da lista "Chamados"
        const proximaSenha = senhasProximas.shift(); // Remove o primeiro número de "Próximos"
        senhasChamadas.push(proximaSenha); // Adiciona ao fim de "Chamados"

        // Exibir o número do topo da lista de "Chamados" como a senha atual
        const senhaAtual = senhasChamadas[0]; // Primeiro número da fila de "Chamados"
        document.getElementById('senha-atual').querySelector('h1').textContent = senhaAtual;

        // Atualiza a interface gráfica
        atualizarFila();
    } else {
        alert('Não há mais senhas a chamar!');
    }
}

// Inicializa a fila ao carregar
atualizarFila();
