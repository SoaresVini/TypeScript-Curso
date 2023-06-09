=======================Negociação=============================

* Não pode ser modificada depois de criada

* Obrigatoriamente tem uma data, qunatidade e valor

* Seu volume é calculado multiplicando a quantidade 

=======================JS=============================

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


expessão regular 

se adicona entre //g 

Serve para selecioar combinações de caracteres em uma string e tambem podem ser consideradas como objetos

Se ficar na duvida: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions

.pop remove o ultimo intem do array

Solução JS
    para que ao retornar o array(objeto) não ser possivel excluir a lista que esta encapsulada, sped operator(...) cada item dessa lista e botnado em uma nova lista

    listaNegociacao(): Array<Negociacao>{
        
            return [...this.negociacoes]
        } 

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


Tipo Data tem a data como "yyyy,mm,dd"


O TS ele entende que um medtodo vai retornar algo ou não e ele tipa conforme o retorno

EX. 

- Se o retorno for uma String ele vai subentender que o retorno do metodo é uma String
- Se não haver retorno ele vai ser do tipo void

Porem isso não é bom, é sempre bom tipar os retornos para que nã haja nenhum erro de retorno. 

Tipar parametros de metodos,construtor, propriedades da classe e retorno de metodo e mesmo quando for do tipo any,, é bom adiconar 

    variavel criada dentro de um metodo não é obrigatorio o TS vai inferir o tipo da variavel

A negociação não pode ser exluida, e por isso não pode ser usado o Array padrão do JS


private negociacoes = [] ; - aqui ta falando que é uma variavel do tipo any com abre e fecha colchetes


uma array em TS

private negociacoes: Array<Negociacao> = [] ; == private negociacoes: Negociacao[] = [];

Tipo de Array só para leitura ReadonlyArray

Generics <>

Jeito "normal"

    private _data : Date;
    private _quantidade : number;
    private _valor : number

    constructor(data : Date, quantidade : number, valor : number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor
    }

jeito inteligente

Coloca o modificicador indica par ao TS que por debaixo dos panos vai cria uma propriedade da classe que contenha o mesmo nome do contrutor e vai fazer a atribuição

 constructor(
        private _data : Date,
        private _quantidade : number, 
        private _valor : number
    ){}


readonly valor que é de somente leitura, após a atribuição ninguem vai poder mexer


o get e o readonly tem esse BO

O date é um objeto, e por isso eu tenho metodos para setar ele, mesmo a variavel sendo somente para leitura

para atribuição ele ta bloqueado, mas pelo metodo o TS não tem oq fazer

Se o programador não implementar esse metodo, ele vai receber essa mengsam pelo Console 
    throw('Classe filha precisa implementar o metodo')

Com os paradigmais do POO podemos tornar o sistema mais seguro e com menos erros por pate do programador, além de facilitar a implementação de classes já que podemos utilizar da herança para não ficar copiando e colando codigo


pai protected -> filha public ou protected

pai public -> public 


Sempre bom tipar tudo e deixar claro o modificador de acesso memso sendo public


Enumerations

enum

Posso criar constantes com os dias da semena e eu posso usalas em qualquer classe do meu projeto


Metodo static, posso chamar ela direto pela instancia da classe

=========Programação defensiva==================
  // a data vai ser igual a que foi vai ser identica a data que esta encapsulado dentro da negociaçõa, porem em uma nova referencia. tanto faz usar o setData ou o getData

  se usar o set ou get vai ser passado para o clone da data a data da negociação vai continuar correta

        const data = new Date(this._data.getTime());

Usar Type em Node

===========================Final do primeiro curso====================================

