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
        for(const combination of this.winner) {
            const [a, b, c] = combination;

            if (
                this.cell[a] !== null &&
                this.cell[a] === this.cell[b] &&
                this.cell[b] === this.cell[c]
            ) {
                return this.cell[a];
            }
        }

        return null;
    }

    public MakeAplay(index: number, player: Player) {
        
        if(this.cell[index] === null) {
            this.cell[index] = player;
        } else {
            console.log('célula inválida!');
        }
        
        const winnerPlayer = this.HasAWinner();

        if(winnerPlayer !== null) {
            return winnerPlayer;
        }

        return null; 
    }
}

class Partida {
    private tabuleiro;
    private player:Player;
    private finished: boolean

    constructor() {
        this.tabuleiro = new Tabuleiro();
        this.player = "X";
        this.finished = false;

    }

    public play(index:number) {
        if(this.finished === true) {
            return console.log("jogo finalizado!");
        }

        const winner = this.tabuleiro.MakeAplay(index, this.player)

        if(winner !== null) {
            console.log("jogador: " + winner + "venceu o jogo") ;
            this.finished = true;
            return
        };

        this.nextPlayer();
    };

    private nextPlayer() {
        this.player = this.player === "X" ? "O" : "X";
    }
}