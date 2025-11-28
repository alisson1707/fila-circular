class Fila{
    private elementos : number []
    private capacidade : number;

    constructor(capacidade: number){
        this.capacidade = capacidade;
        this.elementos = []

    }

    enqueue(n : number): void{
        if(this.estaCheia()){
            console.error('fila cheia ! nao é possivel adicionar.');
            return;
        }
        this.elementos.push(n);

    }

   dequeue(): number | null {
        if (this.estaVazia()) {
            console.error('Fila vazia! Nada para remover.');
            return null;
        }
        return this.elementos.shift()!;
    }

    // 1. Adiciona o elemento no final da fila
    adicionarNoFinal(i : number){
        if (this.estaCheia()) {
        console.error('Fila cheia! Não é possível adicionar.');
        return;
    }
    this.elementos.push(i);

}
    // 2. Remove e retorna o primeiro elemento da fila(o mais antigo)
    removerNoInicio():number | null{
        if(!this.elementos || this.elementos.length === 0){
            return null;
        }else{
            return this.elementos.shift() ?? null;
        }

    }
    // 3. Retornar o elemento que está no início da fila
    frente(): number | null {
        if (this.estaVazia()) {
            console.error('Fila vazia! Não há elementos na frente.');
            return null;
        }
        return this.elementos[0];
    }
   

    // 4. Verificar se a fila está vazia
    estaVazia(): boolean {
        return this.elementos.length === 0;
    }

    // 5. Verificar se a fila está cheia
    estaCheia(): boolean {
        return this.elementos.length >= this.capacidade;
    }

    // 6. Exibir a quantidade de elementos da fila
    tamanho(): number {
        return this.elementos.length;
    }

    // 7. Exibir os elementos da fila
    mostrar(): void {
        console.log(this.elementos);
    }

    // 8. Retornar a capacidade máxima da fila
    capacidadeMaxima(): number {
        return this.capacidade;
    }

// 9. Exibir quantos elementos ainda podem ser inseridos
    espacoDisponivel(): number {
        return this.capacidade - this.elementos.length;
    }

    
}
let fila = new Fila(5);

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

fila.enqueue(60); // fila cheia
fila.mostrar(); // [20, 30, 40, 50, 60]
