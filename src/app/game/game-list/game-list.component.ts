import { Component, HostBinding } from '@angular/core';
import { GameT, GamesT } from '../game.types';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html'
})
export class GameListComponent {

  @HostBinding('class') classes: string = 'flex gap-10';

  array = ['game 1', 'game 2', 'game 3'];
  games: GamesT = this.array.map(this.createGame);

  private createGame(name: string): GameT {
    return {
      id: crypto.randomUUID(),
      name
    }
  }

}
