var Fila = /** @class */ (function () {
    function Fila(capacidade) {
        this.capacidade = capacidade;
        this.elementos = [];
    }
    Fila.prototype.enqueue = function (n) {
        if (this.estaCheia()) {
            console.error('fila cheia ! nao é possivel adicionar.');
            return;
        }
        this.elementos.push(n);
    };
    Fila.prototype.dequeue = function () {
        if (this.estaVazia()) {
            console.error('Fila vazia! Nada para remover.');
            return null;
        }
        return this.elementos.shift();
    };
    // 1. Adiciona o elemento no final da fila
    Fila.prototype.adicionarNoFinal = function (i) {
        if (this.estaCheia()) {
            console.error('Fila cheia! Não é possível adicionar.');
            return;
        }
        this.elementos.push(i);
    };
    // 2. Remove e retorna o primeiro elemento da fila(o mais antigo)
    Fila.prototype.removerNoInicio = function () {
        var _a;
        if (!this.elementos || this.elementos.length === 0) {
            return null;
        }
        else {
            return (_a = this.elementos.shift()) !== null && _a !== void 0 ? _a : null;
        }
    };
    // 3. Retornar o elemento que está no início da fila
    Fila.prototype.frente = function () {
        if (this.estaVazia()) {
            console.error('Fila vazia! Não há elementos na frente.');
            return null;
        }
        return this.elementos[0];
    };
    // 4. Verificar se a fila está vazia
    Fila.prototype.estaVazia = function () {
        return this.elementos.length === 0;
    };
    // 5. Verificar se a fila está cheia
    Fila.prototype.estaCheia = function () {
        return this.elementos.length >= this.capacidade;
    };
    // 6. Exibir a quantidade de elementos da fila
    Fila.prototype.tamanho = function () {
        return this.elementos.length;
    };
    // 7. Exibir os elementos da fila
    Fila.prototype.mostrar = function () {
        console.log(this.elementos);
    };
    // 8. Retornar a capacidade máxima da fila
    Fila.prototype.capacidadeMaxima = function () {
        return this.capacidade;
    };
    // 9. Exibir quantos elementos ainda podem ser inseridos
    Fila.prototype.espacoDisponivel = function () {
        return this.capacidade - this.elementos.length;
    };
    return Fila;
}());
var fila = new Fila(5);
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
fila.enqueue(70);
fila.mostrar(); // [20, 30, 40, 50, 60]
