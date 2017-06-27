import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock, paper & scissors';

  showTurn: boolean;
  aiMove = '';
  playerMove = '';
  result;
  games;

  constructor() { this.games = []; this.showTurn = true; }

  handleMove(playerMove) {
    this.playerMove = playerMove;
    this.aiMove = this.getAIMove();
    this.result = this.scoreGame(this.playerMove, this.aiMove);

    this.showTurn = false;
    console.log('Winner is ' + (this.result === 1 ? 'player.' : this.result === 2 ? 'AI.' : 'draw.'));

    this.games.push({ winner: this.result });
  }

  getAIMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * 3)];
  }

  scoreGame(p1Move, p2Move) {
    if (p1Move === p2Move) { return 'draw' }

    if ( (p1Move === 'Rock' && p2Move === 'Scissors') ||
         (p1Move === 'Paper' && p2Move === 'Rock') ||
         (p1Move === 'Scissors' && p2Move === 'Paper') ) {
      return 1  // first player wins

    } else {
      return 2  // second player winds
    }
  }

}
