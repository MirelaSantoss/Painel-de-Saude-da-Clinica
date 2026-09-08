class Cliente {
    #nome;
    #altura;
    #peso;

    constructor(nome, altura, peso) {
        this.#nome = nome;
        this.#altura = altura;
        this.#peso = peso;
    }

    get nome() {
        return this.#nome;
    }

    get altura() {
        return this.#altura;
    }

    get peso() {
        return this.#peso;
    }

    calcularIMC() {
        return this.#peso / (this.#altura * this.#altura);
    }

    definirClassificacao() {
        const imc = this.calcularIMC();

        switch (true) {
            case imc < 18.5:
                return 'Abaixo do peso';
            case imc >= 18.5 && imc <= 24.9:
                return 'Peso normal';
            case imc >= 25 && imc <= 29.9:
                return 'Sobrepeso';
            case imc >= 30 && imc <= 34.9:
                return 'Obesidade Grau I';
            case imc >= 35 && imc <= 39.9:
                return 'Obesidade Grau II';
            default:
                return 'Obesidade Grau III';
        }
    }
}

class ManipuladorDOM {
    constructor(seletorTabelaBody) {
        this.tabelaBody = document.getElementById(seletorTabelaBody);
    }

    limparTabela() {
        this.tabelaBody.innerHTML = '';
    }

    renderizarLinha(cliente) {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = cliente.nome;

        const tdAltura = document.createElement('td');
        tdAltura.textContent = cliente.altura.toFixed(2);

        const tdPeso = document.createElement('td');
        tdPeso.textContent = cliente.peso.toFixed(1);

        const tdIMC = document.createElement('td');
        tdIMC.textContent = cliente.calcularIMC().toFixed(2);

        const tdClassificacao = document.createElement('td');
        tdClassificacao.textContent = cliente.definirClassificacao();

        tr.appendChild(tdNome);
        tr.appendChild(tdAltura);
        tr.appendChild(tdPeso);
        tr.appendChild(tdIMC);
        tr.appendChild(tdClassificacao);

        this.tabelaBody.appendChild(tr);
    }
}

class PainelApp {
    constructor() {
        this.clientes = [];
        this.dom = new ManipuladorDOM('tabela-pacientes');
        this.form = document.getElementById('form-paciente');
        
        this.carregarDadosIniciais();
        this.configurarEventos();
    }

    carregarDadosIniciais() {
        this.renderizarPainel();
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
        this.renderizarPainel();
    }

    renderizarPainel() {
        this.dom.limparTabela();
        this.clientes.forEach(cliente => {
            this.dom.renderizarLinha(cliente);
        });
    }

    configurarEventos() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const altura = parseFloat(document.getElementById('altura').value);
            const peso = parseFloat(document.getElementById('peso').value);

            if (altura <= 0 || peso <= 0) {
                alert('Os valores de peso e altura devem ser maiores que zero.');
                return;
            }

            const novoCliente = new Cliente(nome, altura, peso);
            this.adicionarCliente(novoCliente);

            this.form.reset();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PainelApp();
});