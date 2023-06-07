=======================Negociação=============================

* Não pode ser modificada depois de criada

* Obrigatoriamente tem uma data, qunatidade e valor

* Seu volume é calculado multiplicando a quantidade 

=======================Clase em JS=============================

Os valores não podem ser modificados depois de uma instancia de negociação ser criada

#nomeVariavel

Como a variavel é privada, ela só pode ser alterada utilizando seu medoto get e adicinar usando seu construtor


export class Negociacao{
    #data;
    #quantidade;
    #valor

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor
    }

    get data(){
        return this.#data
    }

    get quantidade(){
        return this.#quantidade
    }

    get valor(){
        return this.#valor
    }

    get volume(){
        return this.#quantidade * this.#valor
    }

}

app.js

import { Negociacao } from "./models/negociacao.js";


const negociacao = new Negociacao(new Date, 10, 100);

console.log(negociacao);

console.log("=============Pegando o valor de uma variavel da classe utilzando o metodo get da classe===============");

console.log(negociacao.volume);

console.log("=============Adicionaod uma negociação sem ter todos os dados===============");

const negociacao1 = new Negociacao(new Date);
console.log(negociacao1.volume);


=======================problemas do JS=============================

* Nada me impede que eu tente adiconar um valor em qualquer variavel, mesmo isso não sendo possivel por conta dos já get serem do mesmo nome da variavel Privada. Assim só estourando erro em tempo de execução

* Se não houver get, eu vou poder adicionar uma valor a variavel, mas não vai alterar o valor da classe, mas adicionou uma quantidade nova.

* se eu escrever o nome de uma variavel da classe negociação errado, ele vai ser adiconado de forma dinamica, e vai ser considerado no codigo, sem gerar erro

* Eu instanciar uma classe sem todos os valore, sendo que uma das regras do negocio era ter todos os valores preenchidos, e o JS nçao me da nenhum retorno de que está faltando algum dado no contrutor e que o vulume retornou nulo. falhando em Run Time



=======================TypeScript=============================

Criado pela Microsoft

Um superSet do EcmaScript(Tudo de JS)

Mais tipagens e mais outras funções que possibilita uma melhora nos codigos de JS

pasta dist - tudo que o navegador entende

pasta app - contem os arquivos de TP

Arquivos TP são compilados para JS e passa os arquivos para dist

TypeScript é uma linguagem Estaticamente tipada

Centro do TP e o arquivo tsconfig.json

npm run compile - transforma em JS
npm run server - roda o servidor

Os scripts que eu adiciono no package.json pode ser adiconado o nome que qu quiser, porem é bom usar nomes em ingles que remetem a o que ele vai fazer

Ao codar o proprio VS code me fala se estou Codando algo errado e qee possa estourar erro no meu Projeto

mesmo gerando os arquivos JS o TP garente que durante o run time não vão realizar os erros que o JS gerava

Tem auto import, mas tem que colocar o Js no final da classe

any - qualquer coisa

O TP passa para um atributo implicitamente como any

Tipagem para Elementos HTML 

