import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock, paper & scissors';

  showTurn: boolean;
  games = [];
  result;

  constructor() { this.showTurn = true; }

  handleMove(playerMove) {
    const aiMove = this.getAIMove();
    this.result = this.scoreGame(playerMove, aiMove);

    this.showTurn = false;
    console.log('Player chooses ' + playerMove + ', AI chooses ' + aiMove + '.');
    console.log('Winner is ' + (this.result === 1 ? 'player.' : this.result === 2 ? 'AI.' : 'draw.'));
  }

  getAIMove() {
    const moves = ['R', 'P', 'S'];
    return moves[Math.floor(Math.random() * 3)];
  }

  scoreGame(p1Move, p2Move) {
    if (p1Move === p2Move) { return 'draw' }

    if ( (p1Move === 'R' && p2Move === 'S') ||
         (p1Move === 'P' && p2Move === 'R') ||
         (p1Move === 'S' && p2Move === 'P') ) {
      return 1  // first player wins

    } else {
      return 2  // second player winds
    }
  }

}
