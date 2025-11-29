# fila-circular

Foi criado uma classe que implementa uma **fila-circular** com capacidade limitada.

## Estrutura do Projeto

O código que implementa uma **fila circular**, está localizado em `source/fila.ts` . 

## Descrição 

A classe `FilaCircular` permite:
- Adicionar elementos ao final da fila (`enqueue` ou `adicionarNoFinal`)
- Remover e retornar o elemento mais antigo da fila (`dequeue` ou `removerNoInicio`)
- Verificar se a fila está cheia ou vazia (`estaCheia`, `estaVazia`)
- Consultar o elemento da frente (`frente`)
- Consultar a quantidade de elementos (`tamanho`) e espaço disponível (`espacoDisponivel`)
- Mostrar todos os elementos da fila (`mostrar`)
- Retornar a capacidade máxima da fila (`capacidadeMaxima`)

## Primeiro exemplo de uso

```ts
let fila = new FilaCircular(5);

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);
fila.mostrar(); // [10, 20, 30]

console.log('Frente:', fila.frente()); // 10

fila.removerNoInicio();
fila.mostrar(); // [20, 30]

fila.adicionarNoFinal(40);
fila.adicionarNoFinal(50);
fila.mostrar(); // [20, 30, 40, 50]

console.log('Tamanho:', fila.tamanho()); // 4
console.log('Espaço disponível:', fila.espacoDisponivel()); // 1

fila.enqueue(60); 
fila.enqueue(70); // fila cheia, não será adicionado
fila.mostrar(); // [20, 30, 40, 50, 60]

## Segundo exemplo de uso

```ts
let fila = new Fila(4);

fila.enqueue(5);
fila.enqueue(15);
fila.enqueue(25);
fila.mostrar(); // [5, 15, 25]

console.log("Primeiro da fila:", fila.frente()); // 5

fila.dequeue(); // remove 5
fila.dequeue(); // remove 15
fila.mostrar(); // [25]

fila.enqueue(35);
fila.enqueue(45);
fila.enqueue(55);
fila.mostrar(); // [25, 35, 45, 55]

fila.enqueue(65); // fila cheia

console.log("Tamanho atual:", fila.tamanho()); // 4
console.log("Espaço disponível:", fila.espacoDisponivel()); // 0
console.log("Elemento da frente:", fila.frente()); // 25

## Atividade Acadêmica

Esta implementação foi realizada como **atividade em dupla** da disciplina de **Estrutura de Dados**, pelos seguintes alunos:

- Aluno : Álisson Ramires Sena da Silva
- Aluna: Maria Clara Almeida Martins

Disciplina: Estrutura de Dados  
Professor(a): Jonathas Jivago
Semestre: 2025/2

