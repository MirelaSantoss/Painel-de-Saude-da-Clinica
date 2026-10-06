//criacao da classe

class Cliente{
    #nome;
    #altura;
    #peso;


    //criacao dos métodos
    constructor(nome, altura, peso){
        this.#nome = nome;
        this.#altura= Number (altura);
        this.#peso = Number (peso);

    }
//getters
getNone(){
    return this.#nome = nome;
}


get altura(){
    return this.#altura = altura;
}

get peso (){
    return this.#peso = peso;
}

//método para calcular imc
calcularIMC(){
    const imc = this.#peso / (this.#altura * this.#altura)
    return Number(imc.toFixed(2));


}
//verificar a faixa do imc (classificacao)
definirClassificacao(){
    //pegando o imc

    const imc = this.calcularIMC();

    switch(true){
        case(imc > 18.5):
            return "Abaixo do peso";

        case(imc >= 18.5 && imc <= 24.9):
            return "Peso normal";

        case(imc >= 25.0 && imc <= 29.9):
            return "Sobrepeso";


        case(imc >= 30.0 && imc <= 34.9):
            return "Obsidade grau 1";


        case(imc >= 35.0 && imc <= 39.9):
            return "Obsidade grau 2";
        
            default:
                return "Obsidade grau 3";
    }
}

}

