# fila-circular

Foi criado uma classe que implementa uma **fila-circular** com capacidade limitada.

## Estrutura do Projeto

O código que implementa uma **fila circular**, está localizado em `source/fila.ts` em "fila.ts". 

## Descrição 

A classe `FilaCircular` permite:
- Adicionar elementos ao final da fila (`enqueue` ou `adicionarNoFinal`)
- Remover e retornar o elemento mais antigo da fila (`dequeue` ou `removerNoInicio`)
- Verificar se a fila está cheia ou vazia (`estaCheia`, `estaVazia`)
- Consultar o elemento da frente (`frente`)
- Consultar a quantidade de elementos (`tamanho`) e espaço disponível (`espacoDisponivel`)
- Mostrar todos os elementos da fila (`mostrar`)
- Retornar a capacidade máxima da fila (`capacidadeMaxima`)

## Exemplo de uso

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



## Atividade Acadêmica

Esta implementação foi realizada como **atividade em dupla** da disciplina de **Estrutura de Dados**, pelos seguintes alunos:

- Aluno : Álisson Ramires 
- Aluna: Maria Clara

Disciplina: Estrutura de Dados  
Professor(a): Jonathas Jivago
Semestre: 2025/2

