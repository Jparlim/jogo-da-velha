/* 
O tabuleiro sabe:
– quais posições estão ocupadas
– se uma posição é válida
– se existe linha vencedora

o tabuleiro deve ser capas de criar as 9 casas, atualizar os estados, se existe vencedor

O jogador sabe:
– qual símbolo ele usa (X ou O)
– talvez seu nome

o jogador deve ser capaz de fazer sua jogada

A partida sabe:
– de quem é o turno
– quando o jogo termina
– quem venceu

a partida deve ser capaz de saber de quem é o turno
*/

type Player = 'X' | 'O'
type Cell = Player | null

class Tabuleiro {
    private cell:Cell[]
    private winner

    constructor() {
        this.cell = Array(9).fill(null);
        this.winner = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    }

    public HasAWinner() {
        for( let col in this.winner ) {
            this.cell[Number(col.valueOf())]
        }
    }

    public MakeAplay(index: number, player: Player) {
        
        if(this.cell[index] === null) return this.cell[index] = player;
        
        console.log('célula inválida!');
        
        this.HasAWinner();
    }
}

class Partida {

}