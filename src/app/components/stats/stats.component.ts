import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input() games;

  getPlayerWins(): number {
    return this.games.filter((item) => (item.winner === 1) ).length;
  }

  getPlayerLooses(): number {
    return this.games.filter((item) => (item.winner === 2) ).length;
  }

  getPlayerDraws(): number {
    return this.games.filter((item) => (item.winner === 'draw') ).length;
  }

}
